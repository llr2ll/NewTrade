import { Showcase, Contracts, ShowCaseItem, Commorvations, ContractItens } from './pages';
import { ITileView, Report, SideNavToolbarProps } from './types';
import { withNavigationWatcher } from './contexts/navigation';
import { getCustomStore, modal } from './devextreme';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTI2NzMzNTksImV4cCI6MTcxMjY3Njk1OSwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMjkwMjg3IiwiYXV0aF90aW1lIjoxNzEyNjY1OTA1LCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiOWFkMmY2OTktYmUwNy00ZjQ5LWExOGQtYTU1MGIwNTA2ZWFmIiwiTmFtZSI6ImFkbWluQGZhcm1hLmNvbS5iciIsIkZyaWVuZGx5TmFtZSI6IkFkbWlsc29uIE1hcnRpbnMgTGltYSIsIlRlbmFudElkIjoiMTAyODQiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBTCIsIlVzZXJJZGVudGlmaWNhdGlvbkNoYXQiOiJUSWQtMTAyODQ6VUlkLTI5MDI4NyIsIlVzZXJDaGF0U2lnbmF0dXJlIjoiMGFkODBhZGMyOTMwMGQ2NmJhNjI3NjAyMjI1MDRhNDJhMDc0NDZhNDQ5YzhmYzFkYzE0ZTc2OWYwY2Y4MGJhNyIsIldlZWtlbmRTY2FsZSI6IjEiLCJVc2VyTW9kdWxlc1Blcm1pc3Npb24iOiJbXSIsIlVzZXJQaWN0dXJlIjoiN2NjOTRjNjktZDE2YS00N2UxLWIwM2MtODM4NTg1ZTg3NDIzLnBuZyIsInJvbGUiOiJhZG1pbiIsIkxvZ28iOiJhOGViYzU5NC00NTVkLTQyZWMtYjEyZS0wY2Q3MGQyYzQ1NDAucG5nIiwiTWFpbkNvbG9yIjoiIzMyNUNBNSIsIkZvbnRDb2xvciI6IiNmZmZmZmYiLCJUZW5hbnROYW1lIjoiRmFybWEgVHJlaW5hbWVudG8iLCJUZW5hbnRLZXkiOiJGQVIiLCJCcmFuY2giOiIxIiwiRW1haWwiOiJhZG1pbkBmYXJtYS5jb20uYnIiLCJqdGkiOiIxMkJBNEVEMDQ5MzAxM0Q1REI1RUM0Rjc0NERGOEUxNSIsInNpZCI6IjM5NTQ0NTZBRjVBQ0QxODk0QTM2MTQ2NUFCQUFEOEI0IiwiaWF0IjoxNzEyNjczMzU5LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJXRUJBUElQT1JUQUwiLCJDb3Ntb3NQcm9XZWJBcGkiLCJJZGVudGl0eVNlcnZlckFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.dKx4DS0uqqJ-lyncJxaENn-MGKWyLv5jC5v-zhzhXjo7Rwy7MIYJH2C41An8BJOKkUl2og8pkkT0L9o0jjSexrJf0vAVDtIsWCKcMw6Uj5LozUJJk98OPkLSU-tbvwYjgyZX4cvGtJZF5y8vU0NpwoCsNALWjLnXqC4lKdnk1TYn_LQKsOat8czWzWITZncxOWf43gE5ttYxS8qGqlRJ5lNzehPls0z8TuV_huVBv-2-UQG9H7v5HZWYYoGI7ycnSCiRItL5wkVXQmK46qRKJUrYK16TKBsepLM1eNoVMz9CgzyhaxLXjdUEWkQou7kBpRvKod9j37bZhRZ2QHgNIA"

export function developmentMode():boolean{ 
  if(window.location.href.match(/^https:\/\/portal\.cosmospro\.com\.br/) !== null) return false   
  else return true  
}

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