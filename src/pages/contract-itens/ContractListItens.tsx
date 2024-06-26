import { GroupItem, Item } from "devextreme-react/cjs/form"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, Form, List } from "devextreme-react"
import { getCustomStore } from "../../devextreme"
import { IContractItem } from "../../types"
import "./ContractListItens.scss"
import { useRef } from "react"

export function ContractItens(){
    const contractItens:any = useRef()
    const data = useLocation().state
    const navigate = useNavigate()

    const contractItensDs = getCustomStore({
        get: { 
            getErrorMessage:    "Falha ao trazer os contratos",
            customViewName:     "TPC_Contratados",
            dataSourceOptions:  { filter: ["CONTRATO_TRADE", "=", data.CONTRATO_TRADE] }
        }
    })

    return <section className="page-padding">
        <div className="contract-list-header">
            <Button onClick={() => navigate(-1)} text="Itens Contratados" stylingMode="text" icon="arrowleft" height={35}/>

            <Button icon="refresh" type="default" style={{ marginLeft: 10 }} onClick={() => contractItens.current?.instance.repaint()} stylingMode='text'/>
        </div>

        <List height="calc(100% - var(--content-padding) - 32px)"
              className="contract-itens-list"
              dataSource={contractItensDs} 
              pageLoadMode="scrollBottom"
              itemRender={ContractItem}
              useNativeScrolling={true}
              style={{ margin: 15 }}
              ref={contractItens}/>
    </section>
}

export function ContractItem(data: IContractItem){
    const navigate = useNavigate()
    
    data.VALOR = parseFloat(data.VALOR)

    return <section className="contract-item-card" onClick={() => navigate(`/commorvations/${data.ACAO_TRADE_PROVISAO}`, { state: data })}>
        <img src={data.IMAGEM} height="100%" width={345}/>
        <Form formData={data} style={{ margin: 10 }}>
            <GroupItem colCount={2}>
                <Item dataField="ESTADO" editorType="dxTextBox"/>
                <Item dataField="CIDADE" editorType="dxTextBox"/>
                <Item dataField="BAIRRO" editorType="dxTextBox"/>
                <Item dataField="QUANTIDADE" editorType="dxTextBox"/>
                <Item editorOptions={{ readOnly: true, format: "R$ #,##0.00" }} 
                      editorType="dxNumberBox" 
                      dataField="VALOR" 
                      colSpan={2}/>

            </GroupItem>
        </Form>
    </section>
}