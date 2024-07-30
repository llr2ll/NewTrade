
import { Gallery, SelectBox, TextBox } from "devextreme-react";
import './style.scss'
import { getCustomStore } from "../../devextreme";
import { useMemo } from "react";
export function Planograma(){

    const stores = useMemo(()=>{
        return getCustomStore({
            get: {
                customViewName: "TPC_Trade_Planograma_Lojas",
                getErrorMessage: "Falha ao trazer as lojas"
            }
        })
    },[])


    return <section className='page-padding'>
        <div style={{display:'flex'}}>
            <SelectBox 
                label="Loja"
                width={"100%"}
                style={{ margin: "5px" }}
                dataSource={stores}
            />

            <SelectBox 
                label="Exposição"
                width={"100%"}
                style={{ margin: "5px" }}
            />
            
            <SelectBox 
                label="Identificação"
                width={"100%"}
                style={{ margin: "5px" }}
            />

        </div>
        <div style={{display:'flex'}}>
            <SelectBox 
                label="Produto"
                width={"100%"}
                style={{ margin: "5px" }}
            />

            <TextBox 
                label="Corpo"
                width={"100%"}
                style={{ margin: "5px" }}
            />
            
            <TextBox 
                label="Nivel"
                width={"100%"}
                style={{ margin: "5px" }}
            />

            <TextBox 
                label="Face"
                width={"100%"}
                style={{ margin: "5px" }}
            />
            
            <TextBox 
                label="Fundo"
                width={"100%"}
                style={{ margin: "5px" }}
            />
        </div>
        <section style={{display:'flex'}}>
        <div className="image-container">
            <h4>Planta baixa</h4>
            <img src="https://via.placeholder.com/800" alt="Exemplo de Imagem"/>
        </div>
        <div className="image-container">
            <h4>Imagem</h4>
            <img src="https://via.placeholder.com/800" alt="Exemplo de Imagem"/>
        </div>
        </section>
    </section>
}