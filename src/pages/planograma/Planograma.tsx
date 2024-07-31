
import { Gallery, SelectBox, TextBox } from "devextreme-react";
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
        return getCustomStore({
            get: {
                customViewName: "TPC_Trade_Planograma_Exposicao",
                getErrorMessage: "Falha ao trazer as exposições",
                dataSourceOptions: { filter: ["EMPRESA", "=", infoStore?.EMPRESA] }
            }
        })
    }, [infoStore?.EMPRESA])

    const identifications = useMemo(() => {
        return getCustomStore({
            get: {
                customViewName: "TPC_Trade_Planograma_Identificacao",
                getErrorMessage: "Falha ao trazer as identificações",
                dataSourceOptions: { filter: ["TIPO_PONTO", "=", expo?.TIPO_PONTO] }
            }
        })
    }, [expo?.TIPO_PONTO])

    const products = useMemo(() => {
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
    console.log(infoStore)
    return <section className='page-padding'>
        <div style={{ display: 'flex' }}>
            <SelectBox
                label="Loja"
                width={"100%"}
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
                width={"100%"}
                className="field-planograma"
                dataSource={expositions}
                displayExpr={'TIPO_PONTO_DESCRICAO'}
                valueExpr={'TIPO_PONTO'}
                value={expo?.TIPO_PONTO}
                onSelectionChanged={(e) => {
                    setExpo(e.selectedItem)
                }}
            />

            <SelectBox
                label="Identificação"
                width={"100%"}
                className="field-planograma"
                dataSource={identifications}
                displayExpr={'PONTO'}
                valueExpr={'PONTO'}
                value={identity?.PONTO}
                onSelectionChanged={(e) => {
                    setIdentity(e.selectedItem)
                }}
            />

        </div>
        <div style={{ display: 'flex' }}>
            <SelectBox
                label="Produto"
                width={"100%"}
                className="field-planograma"
                dataSource={products}
                displayExpr={'PRODUTO_DESCRICAO'}
                valueExpr={'PRODUTO'}
                value={infoProduct?.PRODUTO}
                onSelectionChanged={(e) => {
                    setInfoProduct(e.selectedItem)
                }}
            />

            <TextBox
                label="Corpo"
                width={"100%"}
                className="field-planograma"
                value={infoProduct?.CORPO}
                readOnly={true}
            />

            <TextBox
                label="Nivel"
                width={"100%"}
                className="field-planograma"
                value={infoProduct?.NIVEL}
                readOnly={true}
            />

            <TextBox
                label="Face"
                width={"100%"}
                className="field-planograma"
                value={infoProduct?.FACE}
                readOnly={true}
            />

            <TextBox
                label="Fundo"
                width={"100%"}
                className="field-planograma"
                value={infoProduct?.FUNDO}
                readOnly={true}
            />
        </div>
        <section style={{ display: 'flex', justifyContent: 'center' }}>
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
    </section>
}