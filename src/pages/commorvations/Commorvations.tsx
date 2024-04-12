import Form, { ButtonItem, GroupItem, Item } from "devextreme-react/cjs/form";
import { useLocation, useNavigate } from "react-router-dom";
import { IContractItem, IList } from "../../types";
import { getCustomStore } from "../../devextreme";
import { List, TextBox } from "devextreme-react";
import { useRef } from "react";
import "./Commorvations.scss";
import jsPDF from 'jspdf';

export function Commorvations(){
    const CommorvationsRef:IList = useRef(null as any)
    const data:IContractItem = useLocation().state
    const navigate = useNavigate()

    const commorvationsDs = getCustomStore({
        get: {
            getErrorMessage:  "Falha ao trazer os items",
            customViewName:   "TPC_Comprovacao",
            dataSourceOptions: { filter: ["ACAO_TRADE_PROVISAO", "=" , data.ACAO_TRADE_PROVISAO] }
        }
    })

    async function print(){
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth()
        let hasImage = false

        try {
            const res:any = await commorvationsDs.load();
            
            for (let i = 0; i < res.length; i++) {
                const img = new Image();
                
                img.src = res[i].IMAGEM.match(/src="([^"]*)"/)[1];
                
                await new Promise((resolve, reject) => {
                    img.onload = () => resolve(true);
                    img.onerror = err => reject(err);
                });
                
                if (hasImage) { doc.addPage() }

                doc.addImage(img, 'JPEG', 0, 0, pageWidth, (img.height * pageWidth) / img.width);
                hasImage = true;
            }

            doc.save('output.pdf');
        } catch (error) { console.error('Erro ao criar o PDF:', error) }
    }   

    return <section className='page-padding'>
        <Form formData={data} colCount={2} scrollingEnabled className="show-case-item-form">
            <GroupItem colSpan={2} colCount={2}>
                <ButtonItem horizontalAlignment="left" 
                            buttonOptions={{ 
                                onClick: () => navigate(-1),
                                stylingMode: "text",
                                text: "Comprovações",
                                icon: "arrowleft", 
                                height: 35
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
                <Item dataField="VALOR" colSpan={2} label={{ text: "Valor:" }} editorType="dxNumberBox" editorOptions={{ readOnly: true, format: "R$ #,##0.00" }}/>
                <Item colSpan={2}>
                    <List className="commorvations-list"
                          dataSource={commorvationsDs} 
                          pageLoadMode="scrollBottom"
                          useNativeScrolling={true}
                          itemRender={Commorvation}
                          ref={CommorvationsRef}
                          height={350}/>
                </Item>
                <ButtonItem colSpan={2} horizontalAlignment="center" buttonOptions={{ text: "Imprimir Comprovações", type: "default", icon: "print", onClick: print }}/>
            </GroupItem>
        </Form>
    </section>
}

const Commorvation = item => <div>
    <img width={349} height={350} src={item.IMAGEM.match(/src="([^"]*)"/)[1]} style={{borderRadius: "5px 5px 0 0"}}/>
    <div style={{display: "flex", marginTop: 10 }}>
        <TextBox text={item.NOME} style={{ marginRight: 10 }} label="Nome" width="100%"/>
        <TextBox text={item.LATITUDE + " / " + item.LONGITUDE} label="Latitude / Longitude" width="100%"/>
    </div>
</div>