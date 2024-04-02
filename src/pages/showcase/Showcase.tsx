import { ShowCaseList, ShowCaseSelects } from "../../components";
import { Button, ScrollView } from "devextreme-react";
import { SelectsRefs } from "../../Context";
import { ISelectBox } from "../../types";
import { useRef } from "react";

export function Showcase() {
  const neighborhoodRef:ISelectBox = useRef(null as any);
  const stateRef:ISelectBox = useRef(null as any);
  const storeRef:ISelectBox = useRef(null as any);
  const typeRef:ISelectBox = useRef(null as any); 
  const cityRef:ISelectBox = useRef(null as any);

  function refresh(){
    neighborhoodRef.current.instance.repaint()
    stateRef.current.instance.repaint()
    storeRef.current.instance.repaint()
    typeRef.current.instance.repaint()
    cityRef.current.instance.repaint()
  }

  return <ScrollView className='view-wrapper-scroll page-padding'>
    <section style={{ width: "100%", height: "100%" }}>
      <SelectsRefs.Provider value={{
        neighborhoodRef: neighborhoodRef,
        stateRef:        stateRef,
        storeRef:        storeRef,
        typeRef:         typeRef,
        cityRef:         cityRef
      }}>

        <div style={{ display: "flex", alignItems: "flex-end" }}>
            <ShowCaseSelects refresh={refresh}/>

            <Button icon="refresh" type="default" style={{ marginLeft: 10 }} onClick={refresh} stylingMode='text'/>
        </div>

        <ShowCaseList refresh={refresh}/>
      </SelectsRefs.Provider>
    </section>
  </ScrollView>
}