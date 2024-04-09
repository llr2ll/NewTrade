import { GroupItem, Item } from "devextreme-react/cjs/form"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, Form, TileView } from "devextreme-react"
import { getCustomStore } from "../../devextreme"
import { IContract, IContractItem } from "../../types"
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Button onClick={() => navigate(-1)} stylingMode="text" icon="arrowleft" height={35} width={35}/>

            <Button icon="refresh" type="default" style={{ marginLeft: 10 }} onClick={() => contractItens.current?.instance.repaint()} stylingMode='text'/>
        </div>

        <TileView height="calc(100% - var(--content-padding) - 32px)"
                  itemComponent={ContractItem}
                  dataSource={contractItensDs}
                  style={{boderRadius: 5}}
                  showScrollbar="always"
                  baseItemHeight={242}
                  direction="vertical"
                  baseItemWidth={700}
                  ref={contractItens}/>
    </section>
}

export function ContractItem(data){
    const navigate = useNavigate()
    const Data: IContractItem = data.data
    
    Data.VALOR = parseFloat(Data.VALOR)

    return <section className="contract-item-card" onClick={() => navigate(`/commorvations/${Data.ACAO_TRADE_PROVISAO}`, { state: Data })}>
        <img src={Data.IMAGEM} height="100%" width={345}/>
        <Form formData={Data} style={{ margin: 10 }}>
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