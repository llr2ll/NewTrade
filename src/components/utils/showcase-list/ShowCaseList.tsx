import { FilterDescriptor } from "devextreme/data/index"
import { getCustomStore } from "../../../devextreme"
import { Button, TileView } from "devextreme-react"
import { ShowCaseContext } from "../../../Context"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import './ShowCaseList.scss'

export function ShowCaseList(){
    const { neighborhoodRef, stateRef, storeRef, typeRef, cityRef, showCaseListRef } = useContext(ShowCaseContext);
    
    function MountFilter(){
        const neighborhood =  neighborhoodRef.current ? neighborhoodRef.current.instance.option("value") : null
        const state =         stateRef.current ? stateRef.current.instance.option("value") : null
        const type =          typeRef.current ? typeRef.current.instance.option("value") : null
        const city =          cityRef.current ? cityRef.current.instance.option("value") : null
        const store =         storeRef.current ? storeRef.current.instance.option("value") : null

        let filter:FilterDescriptor = []

        if(type !== null) filter.push(["TIPO_COMPOSICAO_TRADE", "=", type])  
        if(state !== null) { type !== null && filter.push("AND"); filter.push(["ESTADO", "=", state]) }
        if(city !== null) filter.push("AND", ["CIDADE", "=", city])  
        if(neighborhood !== null) filter.push("AND", ["BAIRRO", "=", neighborhood]) 
        if(store !== null) filter.push("AND", ["NOME_REDUZIDO", "=", store])  

        console.log(filter)

        return filter.length === 0 ? undefined : filter 
    }

    const cityDs = getCustomStore({
        get: {
            getErrorMessage:  "Falha ao trazer as lojas",
            keyExpr:          "CLIENTE_CNPJ",
            customViewName:   "TPC_Trade", 
            dataSourceOptions: { filter: MountFilter() }
        }
    })

    return <TileView height="calc(100% - var(--content-padding) - 32px)"
                     showScrollbar="always"
                     ref={showCaseListRef}
                     itemComponent={Item} 
                     baseItemHeight={447}
                     direction="vertical"
                     dataSource={cityDs}
                     baseItemWidth={345}  
                     itemMargin={30}
                     width="100%"/>
}

function Item({ data }: any){
    const navigate = useNavigate()

    return <section className="ShowCaseCard">
        <header>
            <div>
                <div>R</div>
                <img />
            </div>
            
            <p>{data.TIPO_COMPOSICAO}</p>
        
            <Button icon="overflow" width={35} height={35}></Button>
        </header>
        <main>
            <img src={data.IMAGEM}/>
            <div>
                <ul>
                    <li><strong>Quantidade:</strong>      {data.QUANTIDADE}</li>
                    <li><strong>Estado:</strong>          {data.ESTADO}</li>
                    <li><strong>Cidade:</strong>          {data.CIDADE}</li>
                    <li><strong>Bairro:</strong>          {data.BAIRRO}</li> 
                    <li><strong>Loja:</strong>            {data.LOJA}</li>
                </ul>
            </div>
        </main>
        <footer>
            <div>
                <Button icon="like" type="danger" stylingMode="text" width={35} height={35}/>
                <Button icon="share" stylingMode="text" width={35} height={35}/>
            </div>
            
            <Button onClick={() => navigate(`/showcase-item/${data.InResultId}`, { state: data })}
                    stylingMode="text"
                    icon="expandform" 
                    type="default" 
                    height={35}
                    width={35}/>
        </footer>
    </section>
}