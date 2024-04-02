import { cityDs, neighborhoodDs, stateDs, storeDs, typeDs } from "./ShowCaseSelectsDs";
import { SelectsRefs } from "../../../Context";
import { SelectBox } from "devextreme-react";
import { useContext } from "react";

export function ShowCaseSelects({ refresh }){
    const { neighborhoodRef, stateRef, storeRef, typeRef, cityRef } = useContext(SelectsRefs);

    return <section style={{ display: "flex", width: "100%"}}>
        <SelectBox onValueChange={refresh}
                   noDataText="Nenhuma composição disponível"
                   placeholder="Selecione uma composição..."
                   style={{ margin: "0 5px" }}
                   displayExpr="DESCRICAO"
                   showClearButton={true}
                   valueExpr="DESCRICAO"
                   searchEnabled={true}
                   dataSource={typeDs}
                   ref={typeRef}
                   width="100%"/>

        <SelectBox onValueChange={refresh}
                   noDataText="Nenhum estado disponível"
                   placeholder="Selecione um estado..."
                   style={{ margin: "0 5px" }}
                   showClearButton={true}
                   searchEnabled={true}
                   dataSource={stateDs}
                   displayExpr="ESTADO"
                   valueExpr="ESTADO"
                   ref={stateRef}
                   width="100%"/>

        <SelectBox disabled={stateRef.current && stateRef.current.instance.option("value") === null}
                   onValueChange={refresh}
                   noDataText="Nenhuma cidade disponível"
                   placeholder="Selecione uma cidade..."
                   style={{ margin: "0 5px" }}
                   showClearButton={true}
                   searchEnabled={true}
                   displayExpr="CIDADE"
                   dataSource={cityDs}
                   valueExpr="CIDADE"
                   ref={cityRef}
                   width="100%"/>

        <SelectBox disabled={cityRef.current && cityRef.current.instance.option("value") === null}
                   onValueChange={refresh} 
                   noDataText="Nenhum bairro disponível"
                   placeholder="Selecione um bairro..."
                   dataSource={neighborhoodDs}
                   style={{ margin: "0 5px" }}
                   showClearButton={true}
                   ref={neighborhoodRef}
                   searchEnabled={true}
                   displayExpr="BAIRRO"
                   valueExpr="BAIRRO"
                   width="100%"/>

        <SelectBox disabled={neighborhoodRef.current && neighborhoodRef.current.instance.option("value") === null}
                   onValueChange={refresh}
                   noDataText="Nenhuma loja disponível"
                   placeholder="Selecione uma loja..."
                   style={{ margin: "0 5px" }}
                   showClearButton={true}
                   searchEnabled={true}
                   dataSource={storeDs}
                   displayExpr="LOJA"
                   valueExpr="LOJA"
                   ref={storeRef}
                   width="100%"/>
    </section>
}