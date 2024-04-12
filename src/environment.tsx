import { Showcase, Contracts, ShowCaseItem, Commorvations, ContractItens } from './pages';
import { IShowCaseItem, Report, SideNavToolbarProps } from './types';
import { withNavigationWatcher } from './contexts/navigation';
import { getCustomStore, modal } from './devextreme';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTI5MjM3MzgsImV4cCI6MTcxMjkyNzMzOCwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMjkwMjg3IiwiYXV0aF90aW1lIjoxNzEyOTIzNTEwLCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiMmZkMjIwZGEtNjJjNi00YzQ3LWE2YmEtMDIwNThmYTBjNWMwIiwiTmFtZSI6ImFkbWluQGZhcm1hLmNvbS5iciIsIkZyaWVuZGx5TmFtZSI6IkFkbWlsc29uIE1hcnRpbnMgTGltYSIsIlRlbmFudElkIjoiMTAyODQiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBTCIsIlVzZXJJZGVudGlmaWNhdGlvbkNoYXQiOiJUSWQtMTAyODQ6VUlkLTI5MDI4NyIsIlVzZXJDaGF0U2lnbmF0dXJlIjoiMGFkODBhZGMyOTMwMGQ2NmJhNjI3NjAyMjI1MDRhNDJhMDc0NDZhNDQ5YzhmYzFkYzE0ZTc2OWYwY2Y4MGJhNyIsIldlZWtlbmRTY2FsZSI6IjEiLCJVc2VyTW9kdWxlc1Blcm1pc3Npb24iOiJbXSIsIlVzZXJQaWN0dXJlIjoiN2NjOTRjNjktZDE2YS00N2UxLWIwM2MtODM4NTg1ZTg3NDIzLnBuZyIsInJvbGUiOiJhZG1pbiIsIkxvZ28iOiJhOGViYzU5NC00NTVkLTQyZWMtYjEyZS0wY2Q3MGQyYzQ1NDAucG5nIiwiTWFpbkNvbG9yIjoiIzMyNUNBNSIsIkZvbnRDb2xvciI6IiNmZmZmZmYiLCJUZW5hbnROYW1lIjoiRmFybWEgVHJlaW5hbWVudG8iLCJUZW5hbnRLZXkiOiJGQVIiLCJCcmFuY2giOiIxIiwiRW1haWwiOiJhZG1pbkBmYXJtYS5jb20uYnIiLCJqdGkiOiIzQjNDMzdCRUI1RTI3Nzk2NUEzNkVFQUExMDA4MDA0RSIsInNpZCI6IkQ5MEU5OTQ2Mjc3MzNDMzA5MjUzRDgzMEQzQ0FEQTFEIiwiaWF0IjoxNzEyOTIzNzM4LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJXRUJBUElQT1JUQUwiLCJDb3Ntb3NQcm9XZWJBcGkiLCJJZGVudGl0eVNlcnZlckFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.Q7RCKcrVHWn-vGrzvWqgLps6MBcP7DkUKpkTC59fDJr463odaD1bdsYN5RrNO2kPDmudfn5zR5WtpCGBM9Rc5Rdy33SzFa3y3qHjKH1Z8utC50Bocjf_LMXZ0t47iNhi9PEVzFytLgnS4AL1AQYTizAs3yXvVajDvcfUdwAt9OqpHqFpur8wWz5jK7ZanwAY41TZEAwlhupCWXbDR-qgpWWPwWhWsr5DVn98iXtCj1zCrd5brYZcAMOomUsnVv117b5yArY-J_GltsjzwOeCF-rf2ps9g7lkgSmpdpgn9ta93p7FJZADvME9W98d5Akpz466A3oGW5g3Xn_nR6VsEw"
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

export function ShareItem(data: IShowCaseItem){
  modal("Link copiado para a área de transferência", "success")
  navigator.clipboard.writeText(`https://portal.cosmospro.com.br/private/websites/viewer/new-trade#Id=${data.ACAO_TRADE_PROVISAO}`)
}

export const ShowCaseDs = filter => getCustomStore({
  get: {
    getErrorMessage:  "Falha ao trazer os items",
    dataSourceOptions: { filter: filter },
    customViewName:   "TPC_Trade"
  }
})