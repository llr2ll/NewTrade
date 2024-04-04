import { GroupItem, Item } from "devextreme-react/cjs/form"
import { useNavigate } from "react-router-dom"
import { IContract } from "../../../types"
import { Form } from "devextreme-react"
import "./ContractListItem.scss"

export function ContractListItem(data: IContract){
    const navigate = useNavigate()
    const Data:IContract = data

    Data.VALOR = parseFloat(Data.VALOR)

    return <section className="contract-item" onClick={() => navigate(`/contract-itens/${Data.InResultId}`, { state: data })}>
        <img src={Data.IMAGEM} width={220} height="auto"/>

        <Form formData={Data} className="contract-item-form">
            <GroupItem colCount={3}>
                <Item dataField="TIPO_COMPOSICAO" colSpan={1} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                <Item dataField="ESTADO" colSpan={1} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                <Item dataField="CIDADE" colSpan={1} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                <Item dataField="BAIRRO" colSpan={1} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                <Item dataField="QUANTIDADE" colSpan={1} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
                <Item dataField="VALOR" colSpan={1} cssClass="product-price" editorType="dxNumberBox" editorOptions={{ readOnly: true, format: "R$ #,##0.00" }}/>
            </GroupItem>
        </Form>
    </section>
}