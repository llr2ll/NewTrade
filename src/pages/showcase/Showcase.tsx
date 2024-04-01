import { getCustomStore } from "../../devextreme";
import { ScrollView } from "devextreme-react";

export function Showcase() {

    const storesDs = getCustomStore({
        get: {
          customViewName:   "MMC_WEB_LIST_CLIENTES_LOJAS", 
          getErrorMessage:  "Falha ao trazer as lojas",  
          keyExpr:          "CLIENTE_CNPJ"
        }
    })

    return <ScrollView className='view-wrapper-scroll'>
        <section className="order-selection">
            <div>Teste</div>
        </section>
    </ScrollView>
}