import { Showcase, Contracts, ShowCaseItem, Commorvations, ContractItens, Planograma } from './pages';
import { IShowCaseItem, Report, SideNavToolbarProps } from './types';
import { withNavigationWatcher } from './contexts/navigation';
import { getCustomStore } from './devextreme';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MjI2MDM5NTYsImV4cCI6MTcyMjYwNzU1NiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMzI0OTUzIiwiYXV0aF90aW1lIjoxNzIyNjAxNjc4LCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiMDg3MDY0ODQtNDFjZi00Yjc5LTg1YjYtNTI1NWU3YTg0MjQzIiwiTmFtZSI6ImFkbWluQG5hdHVzZmFybWEuY29tLmJyIiwiRnJpZW5kbHlOYW1lIjoiQWRtaW5pc3RyYWRvciIsIlRlbmFudElkIjoiMTAzMTkiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBIiwiVXNlcklkZW50aWZpY2F0aW9uQ2hhdCI6IlRJZC0xMDMxOTpVSWQtMzI0OTUzIiwiVXNlckNoYXRTaWduYXR1cmUiOiI3NDNlZDczNzA3MTNmNWVhZTM1MWU2YjkzMjk5MjExMTYwNmZlZGQ1MzA0MGY2NzJiMTVkMzkzNjVjOWU5NTkyIiwiV2Vla2VuZFNjYWxlIjoiIiwiVXNlclBpY3R1cmUiOiIiLCJyb2xlIjoiYWRtaW4iLCJMb2dvIjoiYjZjMmNmYjItOGQwZS00OWE3LWFjMzEtYmM4ZDA2ZGRhMWMyLnBuZyIsIk1haW5Db2xvciI6IiMwOTc4YmQiLCJGb250Q29sb3IiOiIjZmZmZmZmIiwiVGVuYW50TmFtZSI6Ik5hdHVzRmFybWEiLCJUZW5hbnRLZXkiOiJOVEYiLCJCcmFuY2giOiIiLCJFbWFpbCI6ImFkbWluQG5hdHVzZmFybWEuY29tLmJyIiwianRpIjoiRjhGQzEwNEE1RUM5N0MwMTI2OUM3OTAwOTcyMTFDRDgiLCJzaWQiOiI2MEI4OEEzNDU4MEYzRUUxODlCODU0QjE1MkZFODg4NiIsImlhdCI6MTcyMjYwMzk1Niwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwiV0VCQVBJUE9SVEFMIiwiQ29zbW9zUHJvV2ViQXBpIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.gA9IfJsC_T5EaPInhOAVYcZKuiy-t4m6ny87gRbBlLEWXVL7Og7475T0ILH_bom_-57Bu9insuNJzupg2MbnIGBKasKY516hBgjCzfcZVPcqZ3CyfKzK5ILqcW_ckPt1gRGK6LM6FjJ1zKaNDxB4qmCNi1bRF5lQHg7DlMe8fb21vPvSqBvotNXXvr58yKlSncIcCBXIuTFq5Z1v_k1C8_Qcw4BRV0Hlxe4wv_xj-QpbUc3YtoZKpVoPriiTxIKVl3FpzFkiDz7K6ClgTEZvJ36ZsUccuyv1u179o_dHrJkUX8jiYd7wUG2bueGQ_Ft_7XwUmiCstjNfbMOdsB6aPQ"
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