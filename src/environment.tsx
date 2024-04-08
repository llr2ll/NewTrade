import { Showcase, Contracts, ShowCaseItem, Commorvations, ContractItens } from './pages';
import { ITileView, Report, SideNavToolbarProps } from './types';
import { withNavigationWatcher } from './contexts/navigation';
import { getCustomStore, modal } from './devextreme';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTI1ODc0NTYsImV4cCI6MTcxMjU5MTA1NiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMjkwMjg3IiwiYXV0aF90aW1lIjoxNzEyNTgzNjE4LCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiMWZjOTNhMmMtYzY2Zi00NzliLTliNTQtZWU0NzdkZmNlMDJkIiwiTmFtZSI6ImFkbWluQGZhcm1hLmNvbS5iciIsIkZyaWVuZGx5TmFtZSI6IkFkbWlsc29uIE1hcnRpbnMgTGltYSIsIlRlbmFudElkIjoiMTAyODQiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBTCIsIlVzZXJJZGVudGlmaWNhdGlvbkNoYXQiOiJUSWQtMTAyODQ6VUlkLTI5MDI4NyIsIlVzZXJDaGF0U2lnbmF0dXJlIjoiMGFkODBhZGMyOTMwMGQ2NmJhNjI3NjAyMjI1MDRhNDJhMDc0NDZhNDQ5YzhmYzFkYzE0ZTc2OWYwY2Y4MGJhNyIsIldlZWtlbmRTY2FsZSI6IjEiLCJVc2VyTW9kdWxlc1Blcm1pc3Npb24iOiJbXSIsIlVzZXJQaWN0dXJlIjoiN2NjOTRjNjktZDE2YS00N2UxLWIwM2MtODM4NTg1ZTg3NDIzLnBuZyIsInJvbGUiOiJhZG1pbiIsIkxvZ28iOiJhOGViYzU5NC00NTVkLTQyZWMtYjEyZS0wY2Q3MGQyYzQ1NDAucG5nIiwiTWFpbkNvbG9yIjoiIzMyNUNBNSIsIkZvbnRDb2xvciI6IiNmZmZmZmYiLCJUZW5hbnROYW1lIjoiRmFybWEgVHJlaW5hbWVudG8iLCJUZW5hbnRLZXkiOiJGQVIiLCJCcmFuY2giOiIxIiwiRW1haWwiOiJhZG1pbkBmYXJtYS5jb20uYnIiLCJqdGkiOiI2QUE5NDY4NTVEN0NCMTA3Mjc1NzE1QkVDOUMyNzIzNyIsInNpZCI6IjI1REVGMkVBNkI1MkI0NkJENUZCRjI2RENCQ0NDRjg0IiwiaWF0IjoxNzEyNTg3NDU2LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJXRUJBUElQT1JUQUwiLCJDb3Ntb3NQcm9XZWJBcGkiLCJJZGVudGl0eVNlcnZlckFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.Jz-CLctGjW0rgtCx1elIqFRBrgB7AQ7EsVhUMSfIdlqOf9bJcvICCCCXnVLZXltyl5dis85WZgNsgfWsOYaDAAofMQ0OUfxEZd-PpBSAV8MJPZUNzEAq58hnvWr_4Da7CRH2Mf9CbPlph47zZzT1ZpgzK9lzVtY7Udkd8llAn3jmgKA5CEr4S5DsG-ArNnIqWJz-OYPxMIXhaXivlHc5fQA9nI1wtZYx37gzyxmaOqHUM8U7RJe20UYRovqh4w8GWbPOcfEdunvSygqQURUSa2g66RRIncf03fyCfrtT_7Kse2nEdWIXfuvrCAugaBseHKEIjyjfDcuCMVAyc7Eqaw"

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

export function FavoriteItem(showCaseListRef: ITileView, data){ 
  getCustomStore({
    post: {
      postErrorMessage:       "Falha ao favoritar o item",
      postCustomActionName:   ""
    }
  })
    .update(undefined, data)
    .then(() => showCaseListRef.current?.instance.repaint())
}

export function ShareItem(){
  modal("Link copiado para a área de transferência", "success")
  navigator.clipboard.writeText('https://portal.cosmospro.com.br/private/websites/viewer/new-trade')
}