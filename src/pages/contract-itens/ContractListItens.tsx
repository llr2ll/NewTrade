import { useLocation, useNavigate } from "react-router-dom"
import { Button, TileView } from "devextreme-react"
import { getCustomStore } from "../../devextreme"
import { IContract } from "../../types"

export function ContractItens(){
    const data = useLocation().state
    const navigate = useNavigate()

    console.log(data)

    const contractItensDs = getCustomStore({
        get: { 
            customViewName: "",
            getErrorMessage: ""
        }
    })

    return <section className="page-padding">
        <Button onClick={() => navigate(-1)} stylingMode="text" icon="arrowleft" height={35} width={35}/>

        <TileView height="calc(100% - var(--content-padding) - 32px)"
                  itemComponent={ContractItem}
                  dataSource={contractItensDs}
                  style={{margin: "auto"}}
                  showScrollbar="always"
                //ref={showCaseListRef}
                  baseItemHeight={447}
                  direction="vertical"
                  />
    </section>
}

export function ContractItem(data: IContract){
    const navigate = useNavigate()

    //`/commorvations/${Data.InResultId}`, { state: data }
    //navigate(`/contract-itens/${Data.InResultId}`, { state: data })
    return <section className="contract-item">

        {/* <Item dataField="TIPO_COMPOSICAO" colSpan={1} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
        <Item dataField="ESTADO" colSpan={1} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
        <Item dataField="CIDADE" colSpan={1} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
        <Item dataField="BAIRRO" colSpan={1} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
        <Item dataField="QUANTIDADE" colSpan={1} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
        <Item dataField="VALOR" colSpan={1} cssClass="product-price" editorType="dxNumberBox" editorOptions={{ readOnly: true, format: "R$ #,##0.00" }}/> */}
    </section>
}