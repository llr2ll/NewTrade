import Form,{ GroupItem, Item, ButtonItem, RequiredRule, EmailRule } from "devextreme-react/cjs/form";
import { getCustomStore, modal } from "../../../devextreme";
import { IPopup, IShowCaseItem } from "../../../types";
import { useRef } from "react";

interface IPreContract { data: IShowCaseItem, popup: IPopup, setData: Function }

export function PreContract({ data, popup, setData }: IPreContract){
    const formRef:any = useRef()

    const entities = getCustomStore({
        get: {
            customViewName: "TPC_Trade_Entidades",
            getErrorMessage: "Falha ao trazer as entidades"
        }
    })

    const paymentForm = getCustomStore({
        get: {
            customViewName: "TPC_Trade_FormasPagamentos",
            getErrorMessage: "Falha ao trazer os métodos de pagamento"
        }
    })

    function sendData(e){
        e.preventDefault();

        if(formRef.current.instance.validate().isValid) {
            const formFields = e.target as HTMLFormElement

            getCustomStore({
                post: {
                    postCustomActionName:   "TPC_Trade_Criar_Pre_Contrato",
                    postErrorMessage:       "Ocorreu um ao criar o pré-contrato"
                }
            })
                .update(undefined, {
                    ...data, 
                    "FORMA_PAGAMENTO": parseInt(formFields.FORMA_PAGAMENTO.value),
                    "ENTIDADE": parseInt(formFields.ENTIDADE.value),
                    "EMAIL": formFields.EMAIL.value
                })
                .then(res => {
                    modal("Pré-contrato criado com sucesso","success") 
                    setData(prev => { return { ...prev, ...res[0] } }) 
                    popup.current?.instance.hide()
                })
        }
        else { modal('Preencha os campos obrigatórios', 'warning') } 
    }

    return <form onSubmit={sendData}>
        <Form ref={formRef}>
            <GroupItem colCount={2}>
                <Item label={{ text: "Entidade" }}
                      editorType="dxSelectBox" 
                      dataField="ENTIDADE"
                      editorOptions={{
                        displayExpr: "DESCRICAO",
                        valueExpr: "ENTIDADE",
                        dataSource: entities
                      }}
                      name="ENTIDADE">
                    
                    <RequiredRule message="Selecione uma entidade" />
                </Item>

                <Item label={{ text: "Forma de pagamento" }}
                    dataField="FORMA_PAGAMENTO" 
                    editorType="dxSelectBox" 
                    name="FORMA_PAGAMENTO" 
                    editorOptions={{
                        valueExpr: "FORMA_PAGAMENTO",
                        displayExpr: "DESCRICAO",
                        dataSource: paymentForm
                    }}>

                    <RequiredRule message="Selecione uma forma de pagamento" />
                </Item>

                <Item editorOptions={{ placeholder: "Insira um email...", valueChangeEvent: 'focusout' }}
                      label={{ text: "Email" }}
                      editorType="dxTextBox"
                      dataField="EMAIL" 
                      name="EMAIL">

                    <RequiredRule message="Insira um email" />
                    <EmailRule message="O email digitado não é valido" />
                </Item>

                <ButtonItem buttonOptions={{ text: "Criar pré-contrato", useSubmitBehavior: true, type: "success" }}
                            horizontalAlignment="center"
                            verticalAlignment="center"
                            colSpan={2}/>
            </GroupItem>
        </Form>
    </form>
}