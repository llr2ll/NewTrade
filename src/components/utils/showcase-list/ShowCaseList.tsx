import { FilterDescriptor } from "devextreme/data/index"
import { ShowCaseListItem } from "./ShowCaseListItem"
import { ShowCaseContext } from "../../../Context"
import { ShowCaseDs } from "../../../environment"
import { List } from "devextreme-react"
import { useContext } from "react"
import './ShowCaseList.scss'

export function ShowCaseList(){
    const { neighborhoodRef, stateRef, storeRef, typeRef, cityRef, showCaseListRef, like } = useContext(ShowCaseContext);
    
    function MountFilter(){
        const neighborhood =  neighborhoodRef.current ? neighborhoodRef.current.instance.option("value") : null
        const state =         stateRef.current ? stateRef.current.instance.option("value") : null
        const type =          typeRef.current ? typeRef.current.instance.option("value") : null
        const city =          cityRef.current ? cityRef.current.instance.option("value") : null
        const store =         storeRef.current ? storeRef.current.instance.option("value") : null

        let filter:FilterDescriptor = []


        if(like === "S") filter.push(["FAVORITO", "=", like])
        if(type !== null) { like === "S" && filter.push("AND"); filter.push(["TIPO_COMPOSICAO_TRADE", "=", type]) }
        if(state !== null) { type !== null && filter.push("AND"); filter.push(["ESTADO", "=", state]) }
        if(city !== null) filter.push("AND", ["CIDADE", "=", city])  
        if(neighborhood !== null) filter.push("AND", ["BAIRRO", "=", neighborhood]) 
        if(store !== null) filter.push("AND", ["NOME_REDUZIDO", "=", store])  

        return filter.length === 0 ? undefined : filter 
    }

    return <List height="calc(100% - var(--content-padding) - 32px)"
                 dataSource={ShowCaseDs(MountFilter())} 
                 itemRender={ShowCaseListItem}
                 pageLoadMode="scrollBottom"
                 style={{margin: "15px 0"}}
                 className="showcase-list"
                 useNativeScrolling={true}
                 ref={showCaseListRef}/>  
}