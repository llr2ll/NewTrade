import { Showcase, Contracts, ShowCaseItem, Commorvations, ContractItens, Planograma } from './pages';
import { IShowCaseItem, Report, SideNavToolbarProps } from './types';
import { withNavigationWatcher } from './contexts/navigation';
import { getCustomStore } from './devextreme';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MjI1NDYyMDIsImV4cCI6MTcyMjU0OTgwMiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMzI0OTUzIiwiYXV0aF90aW1lIjoxNzIyNTE5MzMwLCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiYWFjODk2YWMtNjU3MC00ZTA0LTg3MzctODIyZDI1OGJhZWVkIiwiTmFtZSI6ImFkbWluQG5hdHVzZmFybWEuY29tLmJyIiwiRnJpZW5kbHlOYW1lIjoiQWRtaW5pc3RyYWRvciIsIlRlbmFudElkIjoiMTAzMTkiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBIiwiVXNlcklkZW50aWZpY2F0aW9uQ2hhdCI6IlRJZC0xMDMxOTpVSWQtMzI0OTUzIiwiVXNlckNoYXRTaWduYXR1cmUiOiI3NDNlZDczNzA3MTNmNWVhZTM1MWU2YjkzMjk5MjExMTYwNmZlZGQ1MzA0MGY2NzJiMTVkMzkzNjVjOWU5NTkyIiwiV2Vla2VuZFNjYWxlIjoiIiwiVXNlclBpY3R1cmUiOiIiLCJyb2xlIjoiYWRtaW4iLCJMb2dvIjoiYjZjMmNmYjItOGQwZS00OWE3LWFjMzEtYmM4ZDA2ZGRhMWMyLnBuZyIsIk1haW5Db2xvciI6IiMwOTc4YmQiLCJGb250Q29sb3IiOiIjZmZmZmZmIiwiVGVuYW50TmFtZSI6Ik5hdHVzRmFybWEiLCJUZW5hbnRLZXkiOiJOVEYiLCJCcmFuY2giOiIiLCJFbWFpbCI6ImFkbWluQG5hdHVzZmFybWEuY29tLmJyIiwianRpIjoiQTc5MjIyMUE2MDFCMDc0MTgxOEJDNUMzQUU3REU5NEQiLCJzaWQiOiI4OERENjk5ODVEREQwQzgyN0MwODY1NUI5RThCMUU1NyIsImlhdCI6MTcyMjU0NjIwMiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwiV0VCQVBJUE9SVEFMIiwiQ29zbW9zUHJvV2ViQXBpIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.c1WQHrslwnM649lHYkkfFeTuo-cxoYFVunDSv_i-Hyfrbc7YE8-gBY3xCg70qAkhqgq5xjNRuProeLJh2ZYUdq_NWZhAGLWmYlnHyKuLv8rJw5pBxHjQLtp3zjPchoO0R1aDHV11lzaIPjtil31qd4elAUo4ansEUrHXSJyoAHzfbJ63O-lNfij7P_dfXIPy7atlixWOwcv881Cw84h4bqWfhz6n8kb22VOVQ_83anCpdmgEsxyGuXlVf6Ci_qSHYCHslOv67duF3NVfrVEeFTAmJrL7xicqPXecSsE1zRfnXjzRhCRKw-BC75hUtlpp-eCxSv298K-QGlbWkvmTOQ"
export const appInfo:SideNavToolbarProps = { title: 'Trade Marketing', version: packageJson.version }
export const linkImg = (fieldId:number,recordId:number)=>`https://newapi.cosmospro.com.br/api/PublicFileManager/DownloadFormFile(tenantKey=NTF,fieldId=${fieldId},recordId=${recordId})`
const routes = [
  { path: '/commorvations/:id', element: Commorvations },
  { path: '/contract-itens/:id', element: ContractItens },
  { path: '/showcase-item/:id', element: ShowCaseItem },
  { path: '/contracts', element: Contracts },
  { path: '/planograma', element: Planograma },
  { path: '/showcase', element: Showcase }
];

export const appRoutes = routes.map(route => { return { ...route, element: withNavigationWatcher(route.element, route.path) } })

interface Navigation { text: string, icon: string, path: string, items?: Report[] }

export const Navigation: Navigation[] = [
  { text: 'Vitrine', icon: 'cart', path: '/showcase' },
  { text: 'Contratos', icon: 'textdocument', path: '/contracts' },
  { text: "Relatórios", icon: "columnchooser", path: '', items: [] },
  { text: 'Planograma', icon: 'file', path: '/planograma' }
]

export function FavoriteItem(data: IShowCaseItem, action, actionParams?: boolean){ 
  data.FAVORITO = data.FAVORITO === "N" ? "S" : "N"

  getCustomStore({
    post: {
      postErrorMessage:       "Falha ao favoritar o item",
      postCustomActionName:   "TPC_Trade_Item_Favorito"
    }
  })
    .update(undefined, data)
    .then(() => action(actionParams ? data.FAVORITO : undefined))
}

export const ShowCaseDs = filter => getCustomStore({
  get: {
    getErrorMessage:  "Falha ao trazer os items",
    dataSourceOptions: { filter: filter },
    customViewName:   "TPC_Trade"
  }
})