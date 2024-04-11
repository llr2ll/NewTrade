import { IList, ISelectBox, IShowCaseItem, InitialFilters } from "../../types";
import { ShowCaseList, ShowCaseSelects } from "../../components";
import { Button, ScrollView } from "devextreme-react";
import { useEffect, useRef, useState } from "react";
import { ShowCaseContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { ShowCaseDs } from "../../environment";

export function Showcase() {
  const [filters, setFilters] = useState(InitialFilters)
  const neighborhoodRef:ISelectBox = useRef(null as any);
  const showCaseListRef:IList = useRef(null as any);
  const stateRef:ISelectBox = useRef(null as any);
  const storeRef:ISelectBox = useRef(null as any);
  const typeRef:ISelectBox = useRef(null as any); 
  const cityRef:ISelectBox = useRef(null as any);
  const navigate = useNavigate();

  useEffect(() => {
    let Id = window.localStorage.getItem("Fragment")

    if(Id){
      ShowCaseDs(["ACAO_TRADE_PROVISAO", "=", Id])
        .load()
        .then((res: any) => navigate(`/showcase-item/${res.IShowCaseItem}`, { state: res }))
    } 
  }, [])

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