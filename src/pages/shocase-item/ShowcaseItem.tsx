import Form, { ButtonItem, GroupItem, Item } from "devextreme-react/cjs/form"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, ScrollView } from "devextreme-react"
import "./ShowcaseItem.scss"

export function ShowCaseItem(){
    let data = useLocation().state
    const navigate = useNavigate()

    console.log(data)

    return <ScrollView className='view-wrapper-scroll page-padding'>
        <section className="show-case-item">
            <Form formData={data} colCount={2} width="50%" className="show-case-item-form" style={{ margin: 5 }}>
                <GroupItem colSpan={2} colCount={2}>
                    <ButtonItem colSpan={1} horizontalAlignment="left" buttonOptions={{ icon: "arrowleft", stylingMode: "text", width: 35, height: 35, onClick: () => navigate(-1) }}/>
                    <Item colSpan={1} horizontalAlignment="right">
                        <Button icon="like"  type="danger" stylingMode="text" width={35} height={35}/>
                        <Button icon="share" stylingMode="text" width={35} height={35}/>
                        <Button icon="overflow" width={35} height={35}/>
                    </Item>
                </GroupItem>
     
                <GroupItem colCount={2} caption={data.LOJA} colSpan={2}>
                    <Item dataField="ESTADO" colSpan={1} label={{text: "Estado"}} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                    <Item dataField="CIDADE" colSpan={1} label={{text: "Cidade"}} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                    <Item dataField="BAIRRO" colSpan={1} label={{text: "Bairro"}} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                    <Item dataField="COMPLEMENTO" colSpan={1} label={{text: "Complemento"}} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                    <Item dataField="" colSpan={1} label={{text: "Tamanho da Loja m2"}} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                    <Item dataField="" colSpan={1} label={{text: "Faixa de Faturamento"}} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                    <Item dataField="" colSpan={2} label={{text: "Fluxo de Pessoa(s)"}} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                    
                    <Item dataField="DESCRICAO" colSpan={2} label={{text: "Descricao"}} editorType="dxTextArea" editorOptions={{ readOnly: true }}/>

                    <Item colSpan={2} label={{text: "Nº Do Contrato"}} editorType="dxNumberBox"/>
                    <Item colSpan={2} label={{text: "PIN"}} editorType="dxNumberBox"/>

                    <GroupItem colSpan={2} colCount={2}>
                        <ButtonItem colSpan={1} buttonOptions={{ text: "Detalhes", type: "default", width: "100%"}}/>
                        <ButtonItem colSpan={1} buttonOptions={{ text: "Contratar", type: "success", width: "100%"}}/>
                    </GroupItem>
                </GroupItem>
            </Form>
            
            <main>
             <div className="show-case-item-img"><img src={data.IMAGEM}/></div>
             
             <div className="show-case-item-info">
                <Form formData={data} className="show-case-item-form" style={{ margin: "5px 0" }}>
                    <GroupItem caption="Informações" colSpan={2}>
                        <Item dataField="TIPO_COMPOSICAO" label={{text: "Tipo da Composição"}} colSpan={2} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                        <Item dataField="QUANTIDADE" colSpan={2} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                        <Item dataField="VALOR" colSpan={2} editorType="dxNumberBox" editorOptions={{ readOnly: true, format: "R$ #,##0.00" }}/>
                    </GroupItem>
                </Form>
             </div>
            </main>
        </section>
    </ScrollView>
}