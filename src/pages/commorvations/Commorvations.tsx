import Form, { ButtonItem, GroupItem, Item } from "devextreme-react/cjs/form";
import { useLocation, useNavigate } from "react-router-dom";
import { IContractItem, ITileView } from "../../types";
import { TextBox, TileView } from "devextreme-react";
import { getCustomStore } from "../../devextreme";
import { useRef } from "react";
import jsPDF from 'jspdf';

export function Commorvations(){
    const CommorvationsRef:ITileView = useRef(null as any)
    const data:IContractItem = useLocation().state
    const navigate = useNavigate()

    const commorvationsDs = getCustomStore({
        get: {
            getErrorMessage:  "Falha ao trazer os items",
            customViewName:   "TPC_Comprovacao",
            dataSourceOptions: { filter: ["ACAO_TRADE_PROVISAO", "=" , data.ACAO_TRADE_PROVISAO] }
        }
    })

    function print(){
        const doc = new jsPDF();

        function addImageFromURL(url, x, y, width, height) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = () => { doc.addImage(url, 'JPEG', x, y, width, height); resolve(true) } 
                img.onerror = error => reject(error)
            });
        }

        try {
            commorvationsDs
                .load()
                .then(async (res: any) => {
                    for(let i = 0; i < res.length; i++) { addImageFromURL(await res[i].IMAGEM.match(/src="([^"]*)"/)[1], 10, 10, 350, 350) }

                    await doc.save('output.pdf')
                })
        } catch (error) { console.error('Erro ao criar o PDF:', error) }
    }   

    return <Form formData={data} colCount={2} style={{ margin: "var(--content-padding)" }} className="show-case-item-form">
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
            <Item dataField="TIPO_COMPOSICAO" colSpan={1} label={{ text: "Tipo da Composição:" }} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
            <Item dataField="ESTADO" colSpan={1} label={{ text: "Estado:" }} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
            <Item dataField="CIDADE" colSpan={1} label={{ text: "Cidade:" }} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
            <Item dataField="BAIRRO" colSpan={1} label={{ text: "Bairro:" }} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
            <Item dataField="COMPLEMENTO" colSpan={1} label={{ text: "Complemento:" }} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
            <Item dataField="QUANTIDADE" colSpan={1} label={{ text: "Quantidade:" }} editorType="dxTextBox" editorOptions={{ readOnly: true }}/>
            <Item dataField="VALOR" colSpan={2} editorType="dxNumberBox" editorOptions={{ readOnly: true, format: "R$ #,##0.00" }}/>
            <ButtonItem colSpan={2} horizontalAlignment="center" buttonOptions={{ text: "Imprimir Comprovações", type: "default", icon: "print", onClick: print }}/>
            <Item colSpan={2}>
                <TileView dataSource={commorvationsDs}
                    itemRender={Commorvation}
                    ref={CommorvationsRef}
                    showScrollbar="always"
                    direction="vertical"
                    baseItemHeight={395}
                    baseItemWidth={350}/>
            </Item>
        </GroupItem>
    </Form>
}

const Commorvation = item => <div>
    <img width={349} height={350} src={item.IMAGEM.match(/src="([^"]*)"/)[1]} style={{borderRadius: "5px 5px 0 0"}}/>
    <div style={{display: "flex"}}>
        <TextBox text={item.NOME} style={{ margin: "0 auto" }} label="Nome"/>
        <TextBox text={item.LATITUDE + " / " + item.LONGITUDE} style={{ margin: "0 auto" }} label="Latitude / Longitude"/>
    </div>
</div>