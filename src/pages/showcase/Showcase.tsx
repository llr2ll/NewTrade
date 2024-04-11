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
  const [ like, setLike ] = useState<string>("N");
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

  console.log(filters)

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
        cityRef:         cityRef,
        setLike:         setLike,
        like:            like, 
      }}>

        <div style={{ display: "flex", alignItems: "center" }}>
          <ShowCaseSelects/>

          <Button icon="refresh" type="default" style={{ marginLeft: 10 }} onClick={() => showCaseListRef.current?.instance.repaint()} stylingMode='text'/>
          
          <Button onClick={() => setLike(prev => prev === "S" ? "N" : "S")}
                type={like === "S" ? "danger" : "normal"} 
                stylingMode="text" 
                text="Favoritos"
                width={145}
                icon="like"/>
        </div>

        <ShowCaseList/>
      </ShowCaseContext.Provider>
    </section>
  </ScrollView>
}