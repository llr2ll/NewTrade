import { ISelectBox, ITileView, InitialFilters } from "../../types";
import { ShowCaseList, ShowCaseSelects } from "../../components";
import { Button, ScrollView } from "devextreme-react";
import { ShowCaseContext } from "../../Context";
import { useRef, useState } from "react";

export function Showcase() {
  const [filters, setFilters] = useState(InitialFilters)
  const neighborhoodRef:ISelectBox = useRef(null as any);
  const showCaseListRef:ITileView = useRef(null as any);
  const stateRef:ISelectBox = useRef(null as any);
  const storeRef:ISelectBox = useRef(null as any);
  const typeRef:ISelectBox = useRef(null as any); 
  const cityRef:ISelectBox = useRef(null as any);

  return <ScrollView className='view-wrapper-scroll page-padding'>
    <section style={{ width: "100%", height: "100%" }}>
      <ShowCaseContext.Provider value={{
        showCaseListRef: showCaseListRef,
        neighborhoodRef: neighborhoodRef,
        setFilters:      setFilters,
        stateRef:        stateRef,
        storeRef:        storeRef,
        filters:         filters, 
        typeRef:         typeRef,
        cityRef:         cityRef
      }}>

        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <ShowCaseSelects/>

          <Button icon="refresh" type="default" style={{ marginLeft: 10 }} onClick={() => showCaseListRef.current?.instance.repaint()} stylingMode='text'/>
        </div>

        <ShowCaseList/>
      </ShowCaseContext.Provider>
    </section>
  </ScrollView>
}