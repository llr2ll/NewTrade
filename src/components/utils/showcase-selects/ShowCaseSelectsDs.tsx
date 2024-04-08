import { getCustomStore } from "../../../devextreme"

export const typeDs = getCustomStore({
  get: {
    customViewName:   "TPC_TradeFiltros_Tipo_Composicao", 
    getErrorMessage:  "Falha ao trazer as lojas",  
    keyExpr:          "CLIENTE_CNPJ"
  }
})

export const stateDs = getCustomStore({
  get: {
    customViewName:   "TPC_TradeFiltros_Estado", 
    getErrorMessage:  "Falha ao trazer as lojas",  
    keyExpr:          "CLIENTE_CNPJ"
  }
})

export const cityDs = getCustomStore({
  get: {
    customViewName:   "TPC_TradeFiltros_Cidade", 
    getErrorMessage:  "Falha ao trazer as lojas",  
    keyExpr:          "CLIENTE_CNPJ"
  }
})

export const neighborhoodDs = getCustomStore({
  get: {
    customViewName:   "TPC_TradeFiltros_Bairro", 
    getErrorMessage:  "Falha ao trazer as lojas",  
    keyExpr:          "CLIENTE_CNPJ"
  }
})

export const storeDs = getCustomStore({
  get: {
    customViewName:   "TPC_TradeFiltros_Loja", 
    getErrorMessage:  "Falha ao trazer as lojas",  
    keyExpr:          "CLIENTE_CNPJ"
  }
})