import { withNavigationWatcher } from './contexts/navigation';
import { Showcase, Contracts, ShowCaseItem } from './pages';
import { Report, SideNavToolbarProps } from './types';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTIxNzYzMDIsImV4cCI6MTcxMjE3OTkwMiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMjkwMjg3IiwiYXV0aF90aW1lIjoxNzEyMTc2MzAyLCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiNjUwNWFlYTctMjYyMC00NjUwLWFkYzMtNTg4MmEyYjZjMWZlIiwiTmFtZSI6ImFkbWluQGZhcm1hLmNvbS5iciIsIkZyaWVuZGx5TmFtZSI6IkFkbWlsc29uIE1hcnRpbnMgTGltYSIsIlRlbmFudElkIjoiMTAyODQiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBTCIsIlVzZXJJZGVudGlmaWNhdGlvbkNoYXQiOiJUSWQtMTAyODQ6VUlkLTI5MDI4NyIsIlVzZXJDaGF0U2lnbmF0dXJlIjoiMGFkODBhZGMyOTMwMGQ2NmJhNjI3NjAyMjI1MDRhNDJhMDc0NDZhNDQ5YzhmYzFkYzE0ZTc2OWYwY2Y4MGJhNyIsIldlZWtlbmRTY2FsZSI6IjEiLCJVc2VyTW9kdWxlc1Blcm1pc3Npb24iOiJbXSIsIlVzZXJQaWN0dXJlIjoiN2NjOTRjNjktZDE2YS00N2UxLWIwM2MtODM4NTg1ZTg3NDIzLnBuZyIsInJvbGUiOiJhZG1pbiIsIkxvZ28iOiJhOGViYzU5NC00NTVkLTQyZWMtYjEyZS0wY2Q3MGQyYzQ1NDAucG5nIiwiTWFpbkNvbG9yIjoiIzMyNUNBNSIsIkZvbnRDb2xvciI6IiNmZmZmZmYiLCJUZW5hbnROYW1lIjoiRmFybWEgVHJlaW5hbWVudG8iLCJUZW5hbnRLZXkiOiJGQVIiLCJCcmFuY2giOiIxIiwiRW1haWwiOiJhZG1pbkBmYXJtYS5jb20uYnIiLCJqdGkiOiI2QzU0Rjc2NTZDQUZDMTg0Q0E2MUM4NkI5MzUyREQ3MiIsInNpZCI6IkIzRkFENzdDNzFDMzdBN0ZFNjA2MUI2ODU5MEU5RDFEIiwiaWF0IjoxNzEyMTc2MzAyLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJXRUJBUElQT1JUQUwiLCJDb3Ntb3NQcm9XZWJBcGkiLCJJZGVudGl0eVNlcnZlckFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.M5jyHPxPqVXnNh4lFdbHm8I344vXY23FBwvjVJJE14J48KeE-TKSAS791W_6JX-8Pqg4M1Z0TgIadT-MI205migtD_MoR0-hGonpcDqoqXFx8fBy-LAusHtPn0RWaRgMtHlQ7-rZexxKDfwEelvbvgAgNfE0bB3DnZUaqddryti29GIpiZR_aVwSQAq6Urco1gAXDBCYHpVcPDm3HC8sMLMkXUe3DkkZXi-wMXySGE7kioi_mdpX1z8ERflEv40gjGuv757eqfpQRrW4jnEawSzrJqtNYoBzK8Y1Fi7fapk5uuwDhGWO2r2NssF72hiVj-qWlQPczLEfSOp4RhFSlg"

export const appInfo:SideNavToolbarProps = { title: 'Trade Marketing', version: packageJson.version }

const routes = [
  { path: '/showcase-item/:id', element: ShowCaseItem },
  { path: '/contracts', element: Contracts },
  { path: '/showcase', element: Showcase },
];

export const appRoutes = routes.map(route => { return { ...route, element: withNavigationWatcher(route.element, route.path) } })

interface Navigation { text: string, icon: string, path: string, items?: Report[] }

export const Navigation: Navigation[] = [
  { text: 'Vitrine', icon: 'cart', path: '/showcase' },
  { text: 'Contratos', icon: 'pasteplaintext', path: '/contracts' },
  { text: "Relatórios", icon: "columnchooser", path: '', items: [] }
]