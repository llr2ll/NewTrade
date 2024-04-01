import { withNavigationWatcher } from './contexts/navigation';
import { Report, SideNavToolbarProps } from './types';
import { Showcase, Contracts } from './pages';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTIwMDQ4MjMsImV4cCI6MTcxMjAwODQyMywiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMjkwMjg3IiwiYXV0aF90aW1lIjoxNzEyMDA0ODIzLCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiODkxZDc0ZjMtODY3ZC00YWYyLTk3NDMtZDI5MTVjODZmOWNjIiwiTmFtZSI6ImFkbWluQGZhcm1hLmNvbS5iciIsIkZyaWVuZGx5TmFtZSI6IkFkbWlsc29uIE1hcnRpbnMgTGltYSIsIlRlbmFudElkIjoiMTAyODQiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBTCIsIlVzZXJJZGVudGlmaWNhdGlvbkNoYXQiOiJUSWQtMTAyODQ6VUlkLTI5MDI4NyIsIlVzZXJDaGF0U2lnbmF0dXJlIjoiMGFkODBhZGMyOTMwMGQ2NmJhNjI3NjAyMjI1MDRhNDJhMDc0NDZhNDQ5YzhmYzFkYzE0ZTc2OWYwY2Y4MGJhNyIsIldlZWtlbmRTY2FsZSI6IjEiLCJVc2VyTW9kdWxlc1Blcm1pc3Npb24iOiJbXSIsIlVzZXJQaWN0dXJlIjoiN2NjOTRjNjktZDE2YS00N2UxLWIwM2MtODM4NTg1ZTg3NDIzLnBuZyIsInJvbGUiOiJhZG1pbiIsIkxvZ28iOiJhOGViYzU5NC00NTVkLTQyZWMtYjEyZS0wY2Q3MGQyYzQ1NDAucG5nIiwiTWFpbkNvbG9yIjoiIzMyNUNBNSIsIkZvbnRDb2xvciI6IiNmZmZmZmYiLCJUZW5hbnROYW1lIjoiRmFybWEgVHJlaW5hbWVudG8iLCJUZW5hbnRLZXkiOiJGQVIiLCJCcmFuY2giOiIxIiwiRW1haWwiOiJhZG1pbkBmYXJtYS5jb20uYnIiLCJqdGkiOiJGQkFDNTNCQjkzRjNCRkVGNTNFNDg0RUU5QzgwOUE4MCIsInNpZCI6IkRCQ0NCRDQ1MDc1MkJBMjcyQzkzMERGNTMxMzdERjNDIiwiaWF0IjoxNzEyMDA0ODIzLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJXRUJBUElQT1JUQUwiLCJDb3Ntb3NQcm9XZWJBcGkiLCJJZGVudGl0eVNlcnZlckFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.TbkEm323tyP0OUaKRTNoMsX3PcZIxX1SihMeyU4IT6qJePcGDG99WACiyC5tVAjK4R2bsr_f6ikFjVgzBWSoF33Wlyt1ap2nqAR0E-4U7jtLn7Lc7wmcCqOM5I8g4chWibsQ4jUWey1CIc1OKf2O3GjslgSnIHbcC0WRPhMkMTWSyST4qFrQnuh8OgF2LgXNrRTvSGA0PeC2GAe9EDjsH-Rggf4u0yenZik_XhzGrgpFjJD7OEca3oVTyug1Htnqu62sMXnPnaC9DtfqgXOem4CYIn2ZogvqZlDWfLR1Wd1bwgDpzuhEfVX-OlEEMTHo8AEBi-hbYdorhYaizeXhJA"

export const appInfo:SideNavToolbarProps = { title: 'Trade Marketing', version: packageJson.version }

const routes = [
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