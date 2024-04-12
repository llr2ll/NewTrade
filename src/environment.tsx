import { Showcase, Contracts, ShowCaseItem, Commorvations, ContractItens } from './pages';
import { IShowCaseItem, Report, SideNavToolbarProps } from './types';
import { withNavigationWatcher } from './contexts/navigation';
import { getCustomStore } from './devextreme';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTI5NTQ3NjcsImV4cCI6MTcxMjk1ODM2NywiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMjkwMjg3IiwiYXV0aF90aW1lIjoxNzEyOTQ0NzYzLCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiOGZlMGU4NmYtMWJiOS00NDA0LThkNzctZjgxY2M1NmYwZTY0IiwiTmFtZSI6ImFkbWluQGZhcm1hLmNvbS5iciIsIkZyaWVuZGx5TmFtZSI6IkFkbWlsc29uIE1hcnRpbnMgTGltYSIsIlRlbmFudElkIjoiMTAyODQiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBTCIsIlVzZXJJZGVudGlmaWNhdGlvbkNoYXQiOiJUSWQtMTAyODQ6VUlkLTI5MDI4NyIsIlVzZXJDaGF0U2lnbmF0dXJlIjoiMGFkODBhZGMyOTMwMGQ2NmJhNjI3NjAyMjI1MDRhNDJhMDc0NDZhNDQ5YzhmYzFkYzE0ZTc2OWYwY2Y4MGJhNyIsIldlZWtlbmRTY2FsZSI6IjEiLCJVc2VyTW9kdWxlc1Blcm1pc3Npb24iOiJbXSIsIlVzZXJQaWN0dXJlIjoiN2NjOTRjNjktZDE2YS00N2UxLWIwM2MtODM4NTg1ZTg3NDIzLnBuZyIsInJvbGUiOiJhZG1pbiIsIkxvZ28iOiJhOGViYzU5NC00NTVkLTQyZWMtYjEyZS0wY2Q3MGQyYzQ1NDAucG5nIiwiTWFpbkNvbG9yIjoiIzMyNUNBNSIsIkZvbnRDb2xvciI6IiNmZmZmZmYiLCJUZW5hbnROYW1lIjoiRmFybWEgVHJlaW5hbWVudG8iLCJUZW5hbnRLZXkiOiJGQVIiLCJCcmFuY2giOiIxIiwiRW1haWwiOiJhZG1pbkBmYXJtYS5jb20uYnIiLCJqdGkiOiIzQzdFQUIwQjFFMjY5NkUzMUFGMzZBOTdERjVFM0YxRiIsInNpZCI6IjY3NDgxMkEwNjE3MUIwREVBRjM3NTBFRkMzNDlEMjc0IiwiaWF0IjoxNzEyOTU0NzY3LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJXRUJBUElQT1JUQUwiLCJDb3Ntb3NQcm9XZWJBcGkiLCJJZGVudGl0eVNlcnZlckFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.MhiwVbVcXUdDE2Bh_Sf4vgMOHCVqOYFJPt1IEP7sY2FzNRTX2o6WgxeBsQjxhxdiM_t-paRHh8Y3YVB3aE4K3JgA-ptIXDM7c-gvsVs9rUVNs_azYqlDxjeispPNj8M1Sj7qR2kGuPPbF5ni9UdwDXiusEvVp8jrSTVuuS-kcOXxfrGzERTYAENlB7NFDQsWNpoAgNE8tDGXl8kHs1v3U-7l2iLfGP9B7k1G3tFFr8Si9iR1PsZsk_lFrIzHI4u4Kq4X-4ONU28IEQC08KXv4fAZkMeawCn9I5ltGvLNqu9CWEFtYtg6-dkj6fA1t9CObRjO9ehBsk-U0H8I4VoXAA"
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
  { text: 'Contratos', icon: 'pasteplaintext', path: '/contracts' },
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