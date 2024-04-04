import { FavoriteItem, ShareItem } from "../../../environment"
import { Button, NumberBox } from "devextreme-react"
import { ShowCaseContext } from "../../../Context"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { IShowCaseItem } from "../../../types"

export function ShowCaseListItem({ data }){
    const { showCaseListRef } = useContext(ShowCaseContext);
    const Data:IShowCaseItem = data
    const navigate = useNavigate()

    Data.VALOR = parseFloat(Data.VALOR)

    return <section className="ShowCaseCard">
        <header>
            <div>
                <div>R</div>
                <img />
            </div>
            
            <p>{Data.TIPO_COMPOSICAO}</p>
        
            <Button icon="overflow" width={35} height={35}></Button>
        </header>
        <main>
            <img src={Data.IMAGEM}/>
            <div>
                <ul>
                    <li><strong>Quantidade:</strong>      {Data.QUANTIDADE}</li>
                    <li><strong>Estado:</strong>          {Data.ESTADO}</li>
                    <li><strong>Cidade:</strong>          {Data.CIDADE}</li>
                    <li><strong>Bairro:</strong>          {Data.BAIRRO}</li> 
                    <li><strong>Loja:</strong>            {Data.LOJA}</li>
                </ul>
            </div>
        </main>
        <footer>
            <div>
                <Button onClick={() => FavoriteItem(showCaseListRef, Data)}
                        type={Data.FAVORITADO ? "danger" : "normal"} 
                        stylingMode="text" 
                        height={35} 
                        icon="like"
                        width={35}/>

                <Button icon="share" stylingMode="text" width={35} height={35} onClick={ShareItem}/>

                <Button onClick={() => navigate(`/showcase-item/${Data.InResultId}`, { state: Data })}
                    stylingMode="text"
                    icon="expandform" 
                    type="default" 
                    height={35}
                    width={35}/>
            </div>

            <NumberBox className="product-price" value={data.VALOR} width={172} format="R$ #,##0.00"  readOnly/>
        </footer>
    </section>
}