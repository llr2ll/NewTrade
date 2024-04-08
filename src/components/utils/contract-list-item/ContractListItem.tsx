import { GroupItem, Item } from "devextreme-react/cjs/form"
import { useNavigate } from "react-router-dom"
import { IContract } from "../../../types"
import { Form } from "devextreme-react"
import "./ContractListItem.scss"

export function ContractListItem(data: IContract){
    const navigate = useNavigate()

    return <section className="contract-item" onClick={() => navigate(`/contract-itens/${data.InResultId}`, { state: data })}>
        <img src={data.IMAGEM} width={220} height="auto"/>

        <Form formData={data} className="contract-item-form">
            <GroupItem colCount={3}>
                <Item dataField="DESCRICAO_ACAO" label={{text: "Ação"}} colSpan={1} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                <Item dataField="DATA_INICIAL" label={{text: "Data Inicial"}} colSpan={1} editorType="dxDateBox" editorOptions={{ readOnly: true }}/>
                <Item dataField="DATA_FINAL" label={{text: "Data Final"}} colSpan={1} editorType="dxDateBox" editorOptions={{ readOnly: true }}/>
                <Item dataField="NOME_ENTIDADE" label={{text: "Entidade"}} colSpan={1} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                
                <Item dataField="DESCRICAO_FORMA_PAGAMENTO" 
                      label={{text: "Forma de Pagamento"}} 
                      editorOptions={{ readOnly: true }}
                      editorType="dxTextBox"
                      colSpan={1}/>
                
                <Item editorOptions={{ readOnly: true }}
                      dataField="DESCRICAO_STATUS_CONTRATO_TRADE" 
                      label={{text: "Status"}}
                      editorType="dxTextBox" 
                      colSpan={1}/>

            </GroupItem>
        </Form>
    </section>
}