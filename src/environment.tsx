import { Showcase, Contracts, ShowCaseItem, Commorvations, ContractItens, Planograma } from './pages';
import { IShowCaseItem, Report, SideNavToolbarProps } from './types';
import { withNavigationWatcher } from './contexts/navigation';
import { getCustomStore } from './devextreme';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MjIzNzQ0MTcsImV4cCI6MTcyMjM3ODAxNywiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMzI0OTUzIiwiYXV0aF90aW1lIjoxNzIyMzY1NTY5LCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiMThlZDVlODQtZGRmYS00MjEzLTk4MTktOWRiMDBmMWU0MDE1IiwiTmFtZSI6ImFkbWluQG5hdHVzZmFybWEuY29tLmJyIiwiRnJpZW5kbHlOYW1lIjoiQWRtaW5pc3RyYWRvciIsIlRlbmFudElkIjoiMTAzMTkiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBIiwiVXNlcklkZW50aWZpY2F0aW9uQ2hhdCI6IlRJZC0xMDMxOTpVSWQtMzI0OTUzIiwiVXNlckNoYXRTaWduYXR1cmUiOiI3NDNlZDczNzA3MTNmNWVhZTM1MWU2YjkzMjk5MjExMTYwNmZlZGQ1MzA0MGY2NzJiMTVkMzkzNjVjOWU5NTkyIiwiV2Vla2VuZFNjYWxlIjoiIiwiVXNlclBpY3R1cmUiOiIiLCJyb2xlIjoiYWRtaW4iLCJMb2dvIjoiYjZjMmNmYjItOGQwZS00OWE3LWFjMzEtYmM4ZDA2ZGRhMWMyLnBuZyIsIk1haW5Db2xvciI6IiMwOTc4YmQiLCJGb250Q29sb3IiOiIjZmZmZmZmIiwiVGVuYW50TmFtZSI6Ik5hdHVzRmFybWEiLCJUZW5hbnRLZXkiOiJOVEYiLCJCcmFuY2giOiIiLCJFbWFpbCI6ImFkbWluQG5hdHVzZmFybWEuY29tLmJyIiwianRpIjoiRjcyQzYwMEZFOUYwNjg2NDdBMTFDNTkxNkRGODA4RUEiLCJzaWQiOiJEQjA3QUYwMUMxRTJCQ0YyMzM5Nzg4MTQyREI0QTU4NCIsImlhdCI6MTcyMjM3NDQxNywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImVtYWlsIiwiV0VCQVBJUE9SVEFMIiwiQ29zbW9zUHJvV2ViQXBpIiwiSWRlbnRpdHlTZXJ2ZXJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.MgnD0Bnv41yvCLATDKqazBSVp9HITZKgK3kmAPSP9qtQ6TWULbAd7b78JHhhDFA1n8S8zN19ws6fBGc45PERKPxL6s3nZoA0IDon2ABkw0wwPFXBCjOpJONE4YGJ3l75KIRpUOrd974H6IS-cXoCYpdyVUPF3RQIhtxTTK-mjX4RzJ7tvKKs_Sf76a8pqYiAMJf8S4haBPdHGkhPQzG9h-IUbuvb_rymfek_zgoxZrDuafSg-hqhgRBwMzt-Z7IgOHMVS66aRoCyoDLfHi3ddisJh9XSrDmRsnk4l4TaaLFqQ2v53_NjR6swK891PYm7Z2fBrX0icVqpM4UDjGUfiQ"
export const appInfo:SideNavToolbarProps = { title: 'Trade Marketing', version: packageJson.version }

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