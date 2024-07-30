import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';
import { localToken } from './environment';
import notify from "devextreme/ui/notify";
import { GetCustomStore } from './types';

export function modal(message: string, type: 'error' | 'info' | 'success' | 'warning'){ 
  return notify({ 
    message: message, 
    height: 60, 
    width: 300, 
    position: {
      my: "top right", 
      at: "top right", 
      offset: "-10 15"
    }
  }, type, 5000) 
}
  
export function getCustomStore({ get, post, remove }: GetCustomStore): CustomStore{
  const customAction = name => `https://portal.cosmospro.com.br:9191/api/ExecuteCustomAction/ExecuteAction?ActionName=${name}`
  const customView = name => `https://newapi.cosmospro.com.br/api/CustomViews(Name='${name}')/ExecuteAndReceiveData`
  const { customViewName, getErrorMessage, dataSourceOptions, keyExpr } = get || {}
  const cacheToken = window.localStorage.getItem("Token") 

  const dataSource = (url: string, errorMessage, payload?: any, successMessage?: string): DataSource => new DataSource({
    store: new ODataStore({
      beforeSend: event => {
        event.headers = {
          "Authorization": `Bearer ${cacheToken ? cacheToken : localToken}`, 
          "api-version": 1 
        }
        payload && ( 
          event.payload = payload,
          event.method = "POST"
        )
      },
      errorHandler: () => modal(errorMessage, "error"),
      key: keyExpr,
      version: 4,
      url: url
    }),
    onLoadingChanged: isLoading => {
      const loader:any = document.querySelector('#loader-div')

      if (isLoading) loader.style.display = "flex"
      else {
        successMessage && modal(successMessage, "success") 
        loader.style.display = "none"
      }
    },
    pageSize: 0, // Gambiarra precisa arrumar *( Bug na paginação )
    ...dataSourceOptions
  })
  console.log(get, dataSource)
  return new CustomStore({
    key: get?.keyExpr,

    byKey: get ? async key => { 
      const ds = dataSource(customView(customViewName), getErrorMessage)
      
      ds.filter([keyExpr, "=", key])
      
      return ds.load()
    } : async () => {},

    load: get ? async () => await dataSource(customView(customViewName), getErrorMessage).load() : async () => {},

    update: post ? async (key, values) => {
      const { postCustomActionName, postErrorMessage, postSuccessMessage } = post;

      return await dataSource(customAction(postCustomActionName), postErrorMessage, values, postSuccessMessage).load()
    } : undefined,

    remove: remove ? async values => {
      const { removeCustomActionName, removeErrorMessage, removeSuccessMessage } = remove;

      await dataSource(customAction(removeCustomActionName), removeErrorMessage, values, removeSuccessMessage).load() 
    }: undefined,

    errorHandler: err => modal("Falha ao executar a chamada CustomStore", "error")
  })
}