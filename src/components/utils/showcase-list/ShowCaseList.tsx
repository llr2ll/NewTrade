import { getCustomStore } from "../../../devextreme"
import { List } from "devextreme-react"

export function ShowCaseList(){
    const cityDs = getCustomStore({
        get: {
          customViewName:   "TPC_Trade", 
          getErrorMessage:  "Falha ao trazer as lojas",  
          keyExpr:          "CLIENTE_CNPJ"
        }
    })

    return <List style={{ height: "calc(100% - var(--content-padding) - 32px)", marginTop: 15, background: "gray" }}
                 itemRender={(item: any) => <Item item={item}/>}
                 //dataSource={WebQuoteMonitoringListDs} 
                 //ref={WebQuoteMonitoringListRef}
                 pageLoadMode="scrollBottom"
                 useNativeScrolling={true} 
                 className='WebQuoteList'
                 indicateLoading={false}/>
}

function Item({ item }: any){
    return <></>
}