import Form, { ButtonItem, GroupItem, Item, RequiredRule, SimpleItem } from "devextreme-react/cjs/form"
import { Button, DropDownButton, Popup, ScrollView } from "devextreme-react"
import { FavoriteItem, ShareItem } from "../../environment"
import { useLocation, useNavigate } from "react-router-dom"
import { getCustomStore, modal } from "../../devextreme"
import { IPopup, IShowCaseItem } from "../../types"
import { PreContract } from "../../components"
import { useRef, useState } from "react"
import "./ShowcaseItem.scss"

export function ShowCaseItem(){
    const [ data, setData ] = useState<IShowCaseItem>(useLocation().state)
    const [ contract, setContract ] = useState<number | null>(null)
    const [ like, setLike ] = useState<string>(data.FAVORITO)
    const [ PIN, setPIN ] = useState<number | null>(null)
    const popup:IPopup = useRef(null as any)
    const navigate = useNavigate()
    const formRef:any = useRef()
    
    function openDetails(){ window.open(`https://portal.cosmospro.com.br/private/forms/user/record-editor/${data.datasheet_form_id}/${data.FICHA}`, '_blank') }

    function sendData(e){
        e.preventDefault();

        if(formRef.current.instance.validate().isValid) {
            getCustomStore({
                post: {
                    postCustomActionName:   "TPC_GerarComposicaoContrato",
                    postErrorMessage:       "Ocorreu um erro durante a contratação."
                }
            })
                .update(undefined, { ...data, 'CONTRATO': contract, 'PIN': PIN })
                .then(res => {
                    if(res[0].status === 'contract-success'){
                        modal(res[0].message, 'success')
                        res[0].status && navigate(-1)
                    }  
                    else modal(res[0].message, 'error')
                })
        }
        else { modal('Preencha os campos obrigatórios', 'warning') } 
    }

    function refresh(value: string) { setLike(value) }

    return <ScrollView className='view-wrapper-scroll page-padding'>
        <section className="show-case-item">
            <form onSubmit={sendData} className="show-case-item-form" style={{ margin: 5, width: "50%" }}>
                <Form ref={formRef} formData={data} colCount={2}>
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
                            <Button onClick={() => FavoriteItem(data, refresh, true)}
                                    type={like === "S" ? "danger" : "normal"} 
                                    stylingMode="text" 
                                    height={35} 
                                    icon="like"
                                    width={35}/>

                            <Button icon="share" stylingMode="text" width={35} height={35} onClick={() => ShareItem(data)}/>

                            {/* <DropDownButton showArrowIcon={false} icon="overflow" dropDownOptions={{width: 213}} stylingMode="text" items={[
                                    { text: 'Profile', icon: 'user' },
                                    { text: 'Messages', icon: 'email', badge: '5' },
                                    { text: 'Friends', icon: 'group' },
                                    { text: 'Exit', icon: 'runner' },
                                ]}/> */}
                        </Item>
                    </GroupItem>
        
                    <GroupItem colCount={2} caption={data.LOJA} colSpan={2}>
                        <SimpleItem dataField="ESTADO" colSpan={1} label={{text: "Estado"}} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                        <SimpleItem dataField="CIDADE" colSpan={1} label={{text: "Cidade"}} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                        <SimpleItem dataField="BAIRRO" colSpan={1} label={{text: "Bairro"}} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                        
                        <SimpleItem editorOptions={{ readOnly: true }}
                                    label={{text: "Complemento"}} 
                                    dataField="COMPLEMENTO" 
                                    editorType="dxTextBox" 
                                    colSpan={1}/>
                        
                        <SimpleItem label={{text: "Tamanho da Loja m2"}} 
                                    editorOptions={{ readOnly: true }}
                                    dataField="TAMANHO_M2" 
                                    editorType="dxTextBox" 
                                    colSpan={1}/>

                        <SimpleItem label={{text: "Faixa de Faturamento"}} 
                                    editorOptions={{ readOnly: true }}
                                    dataField="FAIXA_FATURAMENTO" 
                                    editorType="dxTextBox" 
                                    colSpan={1}/>

                        <SimpleItem label={{text: "Fluxo de Pessoa(s)"}} 
                                    editorOptions={{ readOnly: true }}
                                    dataField="FLUXO_PESSOA" 
                                    editorType="dxTextBox" 
                                    colSpan={2}/>
                        
                        <SimpleItem editorOptions={{ readOnly: true }}
                                    label={{text: "Descricao"}} 
                                    editorType="dxTextArea" 
                                    dataField="DESCRICAO" 
                                    colSpan={2}/>

                        <SimpleItem editorOptions={{ min: 0, step: 0, onValueChanged: e => setContract(e.value), value: contract }}
                                    label={{text: "Nº Do Contrato"}} 
                                    dataField="NUMERO_CONTRATO" 
                                    editorType="dxNumberBox" 
                                    name="NUMERO_CONTRATO" 
                                    colSpan={2}>

                            <RequiredRule message="Preencha o número do contrato"/>
                        </SimpleItem>

                        <SimpleItem editorOptions={{ min: 0, step: 0, onValueChanged: e => setPIN(e.value), value: PIN }}
                                    editorType="dxNumberBox"
                                    label={{text: "PIN"}} 
                                    dataField="PIN" 
                                    colSpan={2} 
                                    name="PIN">

                            <RequiredRule message="Insira o código PIN"/>
                        </SimpleItem>

                        <GroupItem colSpan={2} colCount={2}>
                            <ButtonItem colSpan={1} buttonOptions={{ text: "Detalhes", type: "default", width: "100%", onClick: openDetails }}/>
                            <ButtonItem buttonOptions={{ 
                                            onClick: data.PERMITIR_CRIAR_PRE_CONTRATO === "S" ? () => popup.current?.instance.show() : () => {},
                                            disabled: !( data.CONTRATO === "S" || data.PERMITIR_CRIAR_PRE_CONTRATO === "S" ),
                                            text: data.CONTRATO === "S" ? "Contratar" : "Criar pré-contrato",
                                            useSubmitBehavior: data.PERMITIR_CRIAR_PRE_CONTRATO === "N",
                                            type: "success", 
                                            width: "100%",
                                        }}
                                        colSpan={1}/>
                        </GroupItem>
                    </GroupItem>
                </Form>
            </form>
            
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

            <Popup onHiding={() => popup.current?.instance.hide()}
                   title="Criação de pré-contrato" 
                   dragEnabled={false} 
                   showCloseButton 
                   height={215}
                   ref={popup} 
                   width={700}>

                <PreContract data={data} setData={setData} popup={popup}/>
            </Popup>
        </section>
    </ScrollView>
}