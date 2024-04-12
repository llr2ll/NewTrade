import { Button, NumberBox } from "devextreme-react"
import { FavoriteItem } from "../../../environment"
import { ShowCaseContext } from "../../../Context"
import { IShowCaseItem } from "../../../types"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"

export function ShowCaseListItem(data: IShowCaseItem){
    const { showCaseListRef } = useContext(ShowCaseContext);
    const navigate = useNavigate()

    data.VALOR = parseFloat(data.VALOR)

    function refresh() { showCaseListRef.current?.instance.repaint() }

    return <section className="ShowCaseCard" onDoubleClick={() => navigate(`/showcase-item/${data.ACAO_TRADE_PROVISAO}`, { state: data })}>
        <header>
            <div>
                <div>R</div>
                <img />
            </div>
            
            <p><strong>{data.TIPO_COMPOSICAO}</strong></p>
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
                <Button onClick={() => FavoriteItem(data, refresh)}
                        type={data.FAVORITO === "S" ? "danger" : "normal"} 
                        stylingMode="text" 
                        height={35} 
                        icon="like"
                        width={35}/>

                {/* <Button onClick={() => navigate(`/showcase-item/${data.ACAO_TRADE_PROVISAO}`, { state: data })}
                        stylingMode="text"
                        icon="expandform" 
                        type="default" 
                        height={35}
                        width={35}/> */}
            </div>

            <NumberBox className="product-price" value={data.VALOR} width={172} format="R$ #,##0.00" readOnly/>
        </footer>
    </section>
}