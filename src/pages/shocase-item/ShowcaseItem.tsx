import Form, { ButtonItem, GroupItem, Item, RequiredRule } from "devextreme-react/cjs/form"
import { useLocation, useNavigate } from "react-router-dom"
import { FavoriteItem, ShareItem } from "../../environment"
import { getCustomStore, modal } from "../../devextreme"
import { Button, ScrollView } from "devextreme-react"
import { ShowCaseContext } from "../../Context"
import { IShowCaseItem } from "../../types"
import { useContext } from "react"
import "./ShowcaseItem.scss"

export function ShowCaseItem(){
    const { showCaseListRef } = useContext(ShowCaseContext);
    let data:IShowCaseItem = useLocation().state
    const navigate = useNavigate()
    
    function openDetails(){ window.open(`https://portal.cosmospro.com.br/private/forms/user/record-editor/${data.datasheet_form_id}/${data.FICHA}`, '_blank') }

    function sendData(e: any) {
        const body      = { 
            //'CONTRATO': contract?.current?.instance?.option('value') ?? 7777777, 
            //'PIN': pin?.current?.instance?.option('value') ?? 7777, 
            'ACAO_TRADE_PROVISAO': data.ACAO_TRADE_PROVISAO, 
            'TIPO_COMPOSICAO_TRADE': data.TIPO_COMPOSICAO_TRADE, 
            'COMPLEMENTO': data.COMPLEMENTO, 
            'QUANTIDADE': data.QUANTIDADE, 
            'VALOR_VENDA': data.VALOR, 
            'ORDEM': data.ORDEM 
        }

        // getCustomStore({
        //     post: {
        //         postCustomActionName:   "TPC_GerarComposicaoContrato",
        //         postErrorMessage:       "Ocorreu um erro desconhecido durante a contratação."
        //     }
        // })
        //     .update(undefined, data)
        //     .then(res => {
        //         modal(res[0].message, res[0].status === 'contract-success' ? 'success' : 'error')
        //         res[0].status && navigate(-1)
        //     })
    }


    return <ScrollView className='view-wrapper-scroll page-padding'>
        <section className="show-case-item">
            <Form formData={data} colCount={2} width="50%" className="show-case-item-form" style={{ margin: 5 }}>
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

                    <Item colSpan={1} cssClass="media-btns">
                        <Button onClick={() => FavoriteItem(showCaseListRef, data)}
                                type={data.FAVORITADO ? "danger" : "normal"} 
                                stylingMode="text" 
                                height={35} 
                                icon="like"
                                width={35}/>

                        <Button icon="share" stylingMode="text" width={35} height={35} onClick={ShareItem}/>
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

                    <Item colSpan={2} label={{text: "Nº Do Contrato"}} editorType="dxNumberBox">
                        <RequiredRule message="Preencha o número do contrato" />
                    </Item>

                    <Item colSpan={2} label={{text: "PIN"}} editorType="dxNumberBox">
                        <RequiredRule message="Insira o código PIN" />
                    </Item>

                    <GroupItem colSpan={2} colCount={2}>
                        <ButtonItem colSpan={1} buttonOptions={{ text: "Detalhes", type: "default", width: "100%", onClick: openDetails }}/>
                        <ButtonItem colSpan={1} buttonOptions={{ text: "Contratar", type: "success", width: "100%", onClick: sendData, useSubmitBehavior: true }}/>
                    </GroupItem>
                </GroupItem>
            </Form>
            
            <main>
                <img src={data.IMAGEM}/>
             
                <Form formData={data} className="show-case-item-form" style={{ margin: "5px 0" }}>
                    <GroupItem caption="Informações" colSpan={2}>
                        <Item dataField="TIPO_COMPOSICAO" label={{text: "Tipo da Composição"}} colSpan={2} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                        <Item dataField="QUANTIDADE" colSpan={2} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                        <Item dataField="VALOR" colSpan={2} editorType="dxNumberBox" editorOptions={{ readOnly: true, format: "R$ #,##0.00" }}/>
                    </GroupItem>
                </Form>
            </main>
        </section>
    </ScrollView>
}