import { Button, ScrollView, SelectBox } from "devextreme-react";
import { getCustomStore } from "../../devextreme";
import { ShowCaseList } from "../../components";
import { useRef } from "react";

export function Showcase() {
  const neighborhoodRef:any = useRef();
  const stateRef:any = useRef();
  const storeRef:any = useRef();
  const typeRef:any = useRef(); 
  const cityRef:any = useRef();

  const typeDs = getCustomStore({
      get: {
        customViewName:   "TPC_TradeFiltros_Tipo_Composicao", 
        getErrorMessage:  "Falha ao trazer as lojas",  
        keyExpr:          "CLIENTE_CNPJ"
      }
  })

  const stateDs = getCustomStore({
      get: {
        customViewName:   "TPC_TradeFiltros_Estado", 
        getErrorMessage:  "Falha ao trazer as lojas",  
        keyExpr:          "CLIENTE_CNPJ"
      }
  })

  const cityDs = getCustomStore({
      get: {
        customViewName:   "TPC_TradeFiltros_Cidade", 
        getErrorMessage:  "Falha ao trazer as lojas",  
        keyExpr:          "CLIENTE_CNPJ"
      }
  })

  const neighborhoodDs = getCustomStore({
      get: {
        customViewName:   "TPC_TradeFiltros_Bairro", 
        getErrorMessage:  "Falha ao trazer as lojas",  
        keyExpr:          "CLIENTE_CNPJ"
      }
  })

  const storeDs = getCustomStore({
      get: {
        customViewName:   "TPC_TradeFiltros_Loja", 
        getErrorMessage:  "Falha ao trazer as lojas",  
        keyExpr:          "CLIENTE_CNPJ"
      }
  })

  function refresh(){}

  return <ScrollView className='view-wrapper-scroll page-padding'>
    <section style={{ width: "100%", height: "100%" }}>
      <div style={{ display: "flex", width: "100%", alignItems: "flex-end" }}>
          <SelectBox noDataText="Nenhuma composição disponível"
                     placeholder="Selecione uma composição..."
                     style={{ margin: "0 5px" }}
                     displayExpr="DESCRICAO"
                     showClearButton={true}
                     valueExpr="DESCRICAO"
                     searchEnabled={true}
                     dataSource={typeDs}
                     ref={typeRef}
                     width="100%"/>

          <SelectBox noDataText="Nenhum estado disponível"
                     placeholder="Selecione um estado..."
                     style={{ margin: "0 5px" }}
                     showClearButton={true}
                     searchEnabled={true}
                     dataSource={stateDs}
                     displayExpr="ESTADO"
                     valueExpr="ESTADO"
                     ref={stateRef}
                     width="100%"/>

          <SelectBox noDataText="Nenhuma cidade disponível"
                     placeholder="Selecione uma cidade..."
                     //disabled={filters.ESTADO === null}
                     style={{ margin: "0 5px" }}
                     showClearButton={true}
                     searchEnabled={true}
                     displayExpr="CIDADE"
                     dataSource={cityDs}
                     valueExpr="CIDADE"
                     ref={cityRef}
                     width="100%"/>

          <SelectBox noDataText="Nenhum bairro disponível"
                      placeholder="Selecione um bairro..."
                      //disabled={filters.CIDADE === null}
                      dataSource={neighborhoodDs}
                      style={{ margin: "0 5px" }}
                      showClearButton={true}
                      ref={neighborhoodRef}
                      searchEnabled={true}
                      displayExpr="BAIRRO"
                      valueExpr="BAIRRO"
                      width="100%"/>

          <SelectBox noDataText="Nenhuma loja disponível"
                     placeholder="Selecione uma loja..."
                     //disabled={filters.BAIRRO === null}
                     style={{ margin: "0 5px" }}
                     showClearButton={true}
                     searchEnabled={true}
                     dataSource={storeDs}
                     displayExpr="LOJA"
                     valueExpr="LOJA"
                     ref={storeRef}
                     width="100%"/>

          <Button icon="refresh" type="default" style={{marginLeft: 10}} onClick={refresh} stylingMode='text'/>
      </div>

      <ShowCaseList />
    </section>
  </ScrollView>
}