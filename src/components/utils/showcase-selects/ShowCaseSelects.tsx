import { cityDs, neighborhoodDs, stateDs, storeDs, typeDs } from "./ShowCaseSelectsDs";
import { ShowCaseContext } from "../../../Context";
import { SelectBox, Button } from "devextreme-react";
import { useContext } from "react";

export function ShowCaseSelects(){
    const { neighborhoodRef, setFilters, stateRef, storeRef, typeRef, cityRef, filters } = useContext(ShowCaseContext);

    function handleValue(value: any, key: any) {
        setFilters((prev: any) => {
          const current = { ...prev };
          current[key] = value === null ? null : Object.values(value).join("");
          
          return current;
        });
    
        if (key === "ESTADO") {
            neighborhoodRef.current.instance.reset();
            storeRef.current.instance.reset();
            cityRef.current.instance.reset();

            setFilters((prev: any) => {
                const current = { ...prev };
                current["ESTADO"] = value === null ? null : Object.values(value).join("");
                current["NOME_REDUZIDO"] = null;
                current["CIDADE"] = null;
                current["BAIRRO"] = null;

                return current;
            });

        } 
        else if (key === "CIDADE") {
            neighborhoodRef.current.instance.reset();
            storeRef.current.instance.reset();
            
            setFilters((prev: any) => {
                const current = { ...prev };
                current["CIDADE"] = value === null ? null : Object.values(value).join("");
                current["NOME_REDUZIDO"] = null;
                current["BAIRRO"] = null;

                return current;
            });
        } 
        else if (key === "BAIRRO") {
            storeRef.current.instance.reset();
            
            setFilters((prev: any) => {
                const current = { ...prev };
                current["BAIRRO"] = value === null ? null : Object.values(value).join("");
                current["NOME_REDUZIDO"] = null;
                
                return current;
            });
        }
    }

    return <section style={{ display: "flex", width: "100%"}}>
        <SelectBox onValueChange={(value) => handleValue(value, "TIPO_COMPOSICAO")}
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

        <SelectBox onValueChange={(value) => handleValue(value, "ESTADO")}
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

        <SelectBox onValueChange={(value) => handleValue(value, "CIDADE")}
                   noDataText="Nenhuma cidade disponível"
                   placeholder="Selecione uma cidade..."
                   disabled={filters.ESTADO === null}
                   style={{ margin: "0 5px" }}
                   showClearButton={true}
                   searchEnabled={true}
                   displayExpr="CIDADE"
                   dataSource={cityDs}
                   valueExpr="CIDADE"
                   ref={cityRef}
                   width="100%"/>

        <SelectBox onValueChange={(value) => handleValue(value, "BAIRRO")}
                   noDataText="Nenhum bairro disponível"
                   placeholder="Selecione um bairro..."
                   disabled={filters.CIDADE === null}
                   dataSource={neighborhoodDs}
                   style={{ margin: "0 5px" }}
                   showClearButton={true}
                   ref={neighborhoodRef}
                   searchEnabled={true}
                   displayExpr="BAIRRO"
                   valueExpr="BAIRRO"
                   width="100%"/>

        <SelectBox onValueChange={(value) => handleValue(value, "LOJA")}
                   noDataText="Nenhuma loja disponível"
                   placeholder="Selecione uma loja..."
                   disabled={filters.BAIRRO === null}
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