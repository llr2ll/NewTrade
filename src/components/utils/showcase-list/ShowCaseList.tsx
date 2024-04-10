import { FilterDescriptor } from "devextreme/data/index"
import { ShowCaseListItem } from "./ShowCaseListItem"
import { getCustomStore } from "../../../devextreme"
import { ShowCaseContext } from "../../../Context"
import { List, TileView } from "devextreme-react"
import { useContext } from "react"
import './ShowCaseList.scss'

export function ShowCaseList(){
    const { neighborhoodRef, stateRef, storeRef, typeRef, cityRef, showCaseListRef } = useContext(ShowCaseContext);
    
    function MountFilter(){
        const neighborhood =  neighborhoodRef.current ? neighborhoodRef.current.instance.option("value") : null
        const state =         stateRef.current ? stateRef.current.instance.option("value") : null
        const type =          typeRef.current ? typeRef.current.instance.option("value") : null
        const city =          cityRef.current ? cityRef.current.instance.option("value") : null
        const store =         storeRef.current ? storeRef.current.instance.option("value") : null

        let filter:FilterDescriptor = []

        if(type !== null) filter.push(["TIPO_COMPOSICAO_TRADE", "=", type])  
        if(state !== null) { type !== null && filter.push("AND"); filter.push(["ESTADO", "=", state]) }
        if(city !== null) filter.push("AND", ["CIDADE", "=", city])  
        if(neighborhood !== null) filter.push("AND", ["BAIRRO", "=", neighborhood]) 
        if(store !== null) filter.push("AND", ["NOME_REDUZIDO", "=", store])  

        return filter.length === 0 ? undefined : filter 
    }

    const ShowCaseDs = getCustomStore({
        get: {
            getErrorMessage:  "Falha ao trazer os items",
            dataSourceOptions: { filter: MountFilter() },
            customViewName:   "TPC_Trade"
        }
    })

    return <List height="calc(100% - var(--content-padding) - 32px)"
                 style={{margin: "15px 0"}}
                 itemRender={ShowCaseListItem}
                 pageLoadMode="scrollBottom"
                 className="showcase-list"
                 useNativeScrolling={true}
                 dataSource={ShowCaseDs} 
                 ref={showCaseListRef}/>  
}