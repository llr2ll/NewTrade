import { Showcase, Contracts, ShowCaseItem, Commorvations, ContractItens } from './pages';
import { ITileView, Report, SideNavToolbarProps } from './types';
import { withNavigationWatcher } from './contexts/navigation';
import { getCustomStore, modal } from './devextreme';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTI2MDg5NDYsImV4cCI6MTcxMjYxMjU0NiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMjkwMjg3IiwiYXV0aF90aW1lIjoxNzEyNjA4OTQ2LCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiNTViZjE4MDItYTA4Mi00NzJlLTgxNjEtYTgxNzc2N2U0NmJjIiwiTmFtZSI6ImFkbWluQGZhcm1hLmNvbS5iciIsIkZyaWVuZGx5TmFtZSI6IkFkbWlsc29uIE1hcnRpbnMgTGltYSIsIlRlbmFudElkIjoiMTAyODQiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBTCIsIlVzZXJJZGVudGlmaWNhdGlvbkNoYXQiOiJUSWQtMTAyODQ6VUlkLTI5MDI4NyIsIlVzZXJDaGF0U2lnbmF0dXJlIjoiMGFkODBhZGMyOTMwMGQ2NmJhNjI3NjAyMjI1MDRhNDJhMDc0NDZhNDQ5YzhmYzFkYzE0ZTc2OWYwY2Y4MGJhNyIsIldlZWtlbmRTY2FsZSI6IjEiLCJVc2VyTW9kdWxlc1Blcm1pc3Npb24iOiJbXSIsIlVzZXJQaWN0dXJlIjoiN2NjOTRjNjktZDE2YS00N2UxLWIwM2MtODM4NTg1ZTg3NDIzLnBuZyIsInJvbGUiOiJhZG1pbiIsIkxvZ28iOiJhOGViYzU5NC00NTVkLTQyZWMtYjEyZS0wY2Q3MGQyYzQ1NDAucG5nIiwiTWFpbkNvbG9yIjoiIzMyNUNBNSIsIkZvbnRDb2xvciI6IiNmZmZmZmYiLCJUZW5hbnROYW1lIjoiRmFybWEgVHJlaW5hbWVudG8iLCJUZW5hbnRLZXkiOiJGQVIiLCJCcmFuY2giOiIxIiwiRW1haWwiOiJhZG1pbkBmYXJtYS5jb20uYnIiLCJqdGkiOiJCMjlENTYzRjQyRjc5QjUyMEUzQzdDNkM1OUQ4NDY5MCIsInNpZCI6IjdERDVCMUNENTU5M0M3NkJBRUU0NUJDRDNGNkY2Mjk1IiwiaWF0IjoxNzEyNjA4OTQ2LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJXRUJBUElQT1JUQUwiLCJDb3Ntb3NQcm9XZWJBcGkiLCJJZGVudGl0eVNlcnZlckFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.ViTOsV9vDrqDPQBYzsnhA8fJoZb_xyeu9P5bBzvi4m3slSOnPH0vueof0eBnD8oYU2iBjPJDmqxLyQZNlh0ncS0h2aAF6uwB4ghD54Rl4P-_5B1At69626Yh3h1woePCKf4xkLCSWKeyaNHOea2hKKxHY4ZEVis1tWlK2bWM-HLFZnyvAYnz3xnfcUO2ISd2_WmBc2MPP6Dp5VxCOumjHilBXPQBOfxlZ-UyuVMxaGErwva0EBvhZDAgkbg1DLTHqbRWdG19_KiwJinyViHQrFReeBv5wHMyseO-3LTYMOl3eZ8RKflsmOzNtBGzV5MUmteEbLUPLSSx8wz2sbSavA"

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