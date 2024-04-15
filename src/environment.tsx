import { Showcase, Contracts, ShowCaseItem, Commorvations, ContractItens } from './pages';
import { IShowCaseItem, Report, SideNavToolbarProps } from './types';
import { withNavigationWatcher } from './contexts/navigation';
import { getCustomStore } from './devextreme';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTMxODgwMTcsImV4cCI6MTcxMzE5MTYxNywiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMjkwMjg3IiwiYXV0aF90aW1lIjoxNzEzMTg3Nzg5LCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiNjlkOTQxOTYtN2E4MC00YjM3LWFkOWQtZGU4OWE1OWYzMzBiIiwiTmFtZSI6ImFkbWluQGZhcm1hLmNvbS5iciIsIkZyaWVuZGx5TmFtZSI6IkFkbWlsc29uIE1hcnRpbnMgTGltYSIsIlRlbmFudElkIjoiMTAyODQiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBTCIsIlVzZXJJZGVudGlmaWNhdGlvbkNoYXQiOiJUSWQtMTAyODQ6VUlkLTI5MDI4NyIsIlVzZXJDaGF0U2lnbmF0dXJlIjoiMGFkODBhZGMyOTMwMGQ2NmJhNjI3NjAyMjI1MDRhNDJhMDc0NDZhNDQ5YzhmYzFkYzE0ZTc2OWYwY2Y4MGJhNyIsIldlZWtlbmRTY2FsZSI6IjEiLCJVc2VyUGljdHVyZSI6IjdjYzk0YzY5LWQxNmEtNDdlMS1iMDNjLTgzODU4NWU4NzQyMy5wbmciLCJyb2xlIjoiYWRtaW4iLCJMb2dvIjoiYThlYmM1OTQtNDU1ZC00MmVjLWIxMmUtMGNkNzBkMmM0NTQwLnBuZyIsIk1haW5Db2xvciI6IiMzMjVDQTUiLCJGb250Q29sb3IiOiIjZmZmZmZmIiwiVGVuYW50TmFtZSI6IkZhcm1hIFRyZWluYW1lbnRvIiwiVGVuYW50S2V5IjoiRkFSIiwiQnJhbmNoIjoiMSIsIkVtYWlsIjoiYWRtaW5AZmFybWEuY29tLmJyIiwianRpIjoiMjkyOTMyNkU5RkYxMEJDN0FCMDE3MDdGRkU4RTMzRDgiLCJzaWQiOiI0Qzg4MDUzM0I4N0U1MDYwQjRFMUU3N0FDRjc5ODQyOSIsImlhdCI6MTcxMzE4ODAxNywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwiV0VCQVBJUE9SVEFMIiwiQ29zbW9zUHJvV2ViQXBpIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.UN0GjToSdRI13YcP3TD76JnFkvjd0LyLbzIrEs7qcFyg1HxN9FV0VPWBMLn_xQANuW5kVbrGIYJW2VxTivQ6kXGIm59Gb15c9w4yv70kLxCFyRYfgrqaurJaaN_a-SaQlKtwBNim3RDIxjgDKxOaNc256GDfCtkJ_j9DtodiETd6DLdz6aXYkszNJxaeNhi-adqsaO7WKlSDDeCij5mdCLVEOr-Pj0M3UyQ3ovAwEwxmvLWVY-fDxs_NGi7RGgxoSvz2NZUklDMEwnoDxsLmyfKyv6Nq8YMRH72rPMO6cP1ZtgBSGwWuKr1zN0Tk3XK4LFkSzyREGaFfZ07bFIFf6g"
export const appInfo:SideNavToolbarProps = { title: 'Trade Marketing', version: packageJson.version }

const routes = [
  { path: '/commorvations/:id', element: Commorvations },
  { path: '/contract-itens/:id', element: ContractItens },
  { path: '/showcase-item/:id', element: ShowCaseItem },
  { path: '/contracts', element: Contracts },
  { path: '/showcase', element: Showcase }
];

export const appRoutes = routes.map(route => { return { ...route, element: withNavigationWatcher(route.element, route.path) } })

interface Navigation { text: string, icon: string, path: string, items?: Report[] }

export const Navigation: Navigation[] = [
  { text: 'Vitrine', icon: 'cart', path: '/showcase' },
  { text: 'Contratos', icon: 'textdocument', path: '/contracts' },
  { text: "Relatórios", icon: "columnchooser", path: '', items: [] }
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