import Form, { ButtonItem, GroupItem, Item } from "devextreme-react/cjs/form";
import { useLocation, useNavigate } from "react-router-dom";
import { getCustomStore } from "../../devextreme";
import { TileView } from "devextreme-react";
import { ITileView } from "../../types";
import { useRef } from "react";

export function Commorvations(){
    const CommorvationsRef:ITileView = useRef(null as any)
    const data = useLocation().state
    const navigate = useNavigate()

    const commorvationsDs = getCustomStore({
        get: {
            getErrorMessage:  "Falha ao trazer os items",
            customViewName:   "TPC_Trade"
        }
    })

    function print(){}

    return <section className="page-padding">
        <Form formData={data} colCount={2} width="100%" height="100%" className="show-case-item-form" style={{ margin: 5 }}>
            <GroupItem colSpan={2} colCount={2}>
                <ButtonItem horizontalAlignment="left" 
                            buttonOptions={{ 
                                onClick: () => navigate(-1),
                                stylingMode: "text",
                                icon: "arrowleft", 
                                height: 35, 
                                width: 35
                            }}
                            colSpan={1}/>

                <ButtonItem horizontalAlignment="right" 
                            buttonOptions={{ 
                                onClick: () => CommorvationsRef.current?.instance.getDataSource().reload(),
                                stylingMode: "text",
                                type: "default",
                                icon: "refresh",
                                height: 35, 
                                width: 35
                            }}
                            colSpan={1}/>
            </GroupItem>
    
            <GroupItem colCount={2} caption={data.LOJA} colSpan={2}>
                <Item dataField="ESTADO" colSpan={1} label={{ text: "Estado:" }} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                <Item dataField="CIDADE" colSpan={1} label={{ text: "Cidade:" }} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                <Item dataField="BAIRRO" colSpan={1} label={{ text: "Bairro:" }} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                <Item dataField="COMPLEMENTO" colSpan={1} label={{ text: "Complemento:" }} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                
                <Item colSpan={2} label={{ text: "Comprovações" }}>
                    <TileView itemRender={data => <img width="100%" height="100%" src={data.IMAGEM}></img>}
                              dataSource={commorvationsDs}
                              ref={CommorvationsRef}
                              showScrollbar="always"
                              direction="vertical"
                              baseItemHeight={190}
                              baseItemWidth={285}/>
                </Item>

                <ButtonItem colSpan={2} horizontalAlignment="center" buttonOptions={{ text: "Imprimir Comprovações", type: "default", icon: "print", onClick: print }}/>
            </GroupItem>
        </Form>
    </section>
}