
import { ContractListItem } from "../../components";
import { getCustomStore } from "../../devextreme";
import { List } from "devextreme-react";

export function Contracts(){
    const contractList = getCustomStore({
        get: {
            customViewName:     "TPC_Contratados",
            getErrorMessage:    "Falha ao trazer os contratos"
        }
    })

    return <section className='page-padding'>
        <List itemRender={ContractListItem}
              pageLoadMode="scrollBottom"
              useNativeScrolling={true} 
              dataSource={contractList}
              indicateLoading={false}/>
    </section>
}