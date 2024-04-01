
import { List, ScrollView } from "devextreme-react";
import { ContractListItem } from "../../components";

export function Contracts(){
    return <ScrollView className='view-wrapper-scroll page-padding'>
        <List itemRender={(item: any) => <ContractListItem item={item}/>}
               //dataSource={WebQuoteMonitoringListDs} 
               //ref={WebQuoteMonitoringListRef}
               pageLoadMode="scrollBottom"
               useNativeScrolling={true} 
               className='WebQuoteList'
               indicateLoading={false}/>
    </ScrollView>
}