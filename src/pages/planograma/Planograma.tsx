
import { Gallery, ScrollView, SelectBox, TextBox } from "devextreme-react";
import './style.scss'
import { getCustomStore } from "../../devextreme";
import { useEffect, useMemo, useState } from "react";
import { linkImg } from "../../environment";
import plantaBaixa from "../../assets/SEM-imagem.jpeg"

export function Planograma() {

    const [infoStore, setInfoStore] = useState<any>()
    const [expo, setExpo] = useState<any>()
    const [identity, setIdentity] = useState<any>()
    const [infoProduct, setInfoProduct] = useState<any>()

    const stores = useMemo(() => {
        return getCustomStore({
            get: {
                customViewName: "TPC_Trade_Planograma_Lojas",
                getErrorMessage: "Falha ao trazer as lojas"
            }
        })
    }, [])
    
    const expositions = useMemo(() => {
        if(infoStore)
        return getCustomStore({
            get: {
                customViewName: "TPC_Trade_Planograma_Exposicao",
                getErrorMessage: "Falha ao trazer as exposições",
                dataSourceOptions: { filter: ["EMPRESA", "=", infoStore?.EMPRESA] }
            }
        })
    }, [infoStore?.EMPRESA])

    const identifications = useMemo(() => {
        if(expo)
        return getCustomStore({
            get: {
                customViewName: "TPC_Trade_Planograma_Identificacao",
                getErrorMessage: "Falha ao trazer as identificações",
                dataSourceOptions: { filter: ["TIPO_PONTO", "=", expo?.TIPO_PONTO] }
            }
        })
    }, [expo?.TIPO_PONTO])

    const products = useMemo(() => {
        if(identity)
        return getCustomStore({
            get: {
                customViewName: "TPC_Trade_Planograma_Produtos",
                getErrorMessage: "Falha ao trazer os produtos",
                dataSourceOptions: { filter: ["PONTO", "=", identity?.PONTO] }
            }
        })
    }, [identity?.TIPO_PONTO])

    useEffect(() => {
        setExpo(null)
        setIdentity(null)
        setInfoProduct(null)
    }, [infoStore])

    useEffect(() => {
        setIdentity(null)
        setInfoProduct(null)
    }, [expo])

    useEffect(() => {
        setInfoProduct(null)
    }, [identity])
    
    return <section className='page-padding'>
          <ScrollView
    className="scrollable-list"
    direction="vertical"
    showScrollbar="always">
                <div className="selects-container">
            <SelectBox
                label="Loja"
                className="field-planograma"
                dataSource={stores}
                displayExpr={'NOME_REDUZIDO'}
                valueExpr={'EMPRESA'}
                value={infoStore?.EMPRESA}
                onSelectionChanged={(e) => {
                    setInfoStore(e.selectedItem)
                }}
            />

            <SelectBox
                label="Exposição"
                className="field-planograma"
                dataSource={expositions}
                displayExpr={'TIPO_PONTO_DESCRICAO'}
                valueExpr={'TIPO_PONTO'}
                value={expo?.TIPO_PONTO}
                onSelectionChanged={(e) => {
                    setExpo(e.selectedItem)
                }}
                disabled={!infoStore}
            />

            <SelectBox
                label="Identificação"
                className="field-planograma"
                dataSource={identifications}
                displayExpr={'PONTO'}
                valueExpr={'PONTO'}
                value={identity?.PONTO}
                onSelectionChanged={(e) => {
                    setIdentity(e.selectedItem)
                }}
                disabled={!expo}
            />

        </div>
        <div className="selects-container">
            <SelectBox
                label="Produto"
                className="field-planograma"
                dataSource={products}
                displayExpr={'PRODUTO_DESCRICAO'}
                valueExpr={'PRODUTO'}
                value={infoProduct?.PRODUTO}
                onSelectionChanged={(e) => {
                    setInfoProduct(e.selectedItem)
                }}
                disabled={!identity}
            />

            <TextBox
                label="Corpo"
                className="field-planograma"
                value={infoProduct?.CORPO}
                readOnly={true}
            />

            <TextBox
                label="Nivel"
                className="field-planograma"
                value={infoProduct?.NIVEL}
                readOnly={true}
            />

            <TextBox
                label="Face"
                className="field-planograma"
                value={infoProduct?.FACE}
                readOnly={true}
            />

            <TextBox
                label="Fundo"
                className="field-planograma"
                value={infoProduct?.FUNDO}
                readOnly={true}
            />
        </div>
        <section className="cards-container">
            {
                infoProduct &&
                <article className="card">
                    <h4 className="title-planograma">Planta baixa</h4>
                    <div className="image-container">
                        <img src={infoStore?.PLANTA_BAIXA ? linkImg(110909, infoStore?.FICHA_DADOS) : plantaBaixa} alt="Planta baixa" />
                    </div>
                </article>
            }
            {
                infoProduct &&
                <article className="card">
                    <h4 className="title-planograma">Imagem</h4>
                    <div className="image-container">
                        <img src={linkImg(110875, identity?.IMAGEM) } alt="Exemplo de Imagem" />
                        {/* //"https://via.placeholder.com/800" */}
                    </div>
                </article>
            }
        </section>
    </ScrollView>

    </section>
}