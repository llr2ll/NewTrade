import { withNavigationWatcher } from './contexts/navigation';
import { Report, SideNavToolbarProps } from './types';
import { Showcase, Contracts } from './pages';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTE5ODY3ODUsImV4cCI6MTcxMTk5MDM4NSwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMjkwMjg3IiwiYXV0aF90aW1lIjoxNzExOTc3OTM1LCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiYmQyMWFlY2ItYmU3MS00Y2IxLThiYWYtZDgwZTk2M2ZiOWI0IiwiTmFtZSI6ImFkbWluQGZhcm1hLmNvbS5iciIsIkZyaWVuZGx5TmFtZSI6IkFkbWlsc29uIE1hcnRpbnMgTGltYSIsIlRlbmFudElkIjoiMTAyODQiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBTCIsIlVzZXJJZGVudGlmaWNhdGlvbkNoYXQiOiJUSWQtMTAyODQ6VUlkLTI5MDI4NyIsIlVzZXJDaGF0U2lnbmF0dXJlIjoiMGFkODBhZGMyOTMwMGQ2NmJhNjI3NjAyMjI1MDRhNDJhMDc0NDZhNDQ5YzhmYzFkYzE0ZTc2OWYwY2Y4MGJhNyIsIldlZWtlbmRTY2FsZSI6IjEiLCJVc2VyTW9kdWxlc1Blcm1pc3Npb24iOiJbXSIsIlVzZXJQaWN0dXJlIjoiN2NjOTRjNjktZDE2YS00N2UxLWIwM2MtODM4NTg1ZTg3NDIzLnBuZyIsInJvbGUiOiJhZG1pbiIsIkxvZ28iOiJhOGViYzU5NC00NTVkLTQyZWMtYjEyZS0wY2Q3MGQyYzQ1NDAucG5nIiwiTWFpbkNvbG9yIjoiIzMyNUNBNSIsIkZvbnRDb2xvciI6IiNmZmZmZmYiLCJUZW5hbnROYW1lIjoiRmFybWEgVHJlaW5hbWVudG8iLCJUZW5hbnRLZXkiOiJGQVIiLCJCcmFuY2giOiIxIiwiRW1haWwiOiJhZG1pbkBmYXJtYS5jb20uYnIiLCJqdGkiOiIzMzk0NDc1NDE4QTJGMzNDMERGQkJFOUY2NUU4M0JGOCIsInNpZCI6IkNCOTAwQUVCNkVDRjJCNTcyMUE0OUQzMEEwQjlENjg1IiwiaWF0IjoxNzExOTg2Nzg1LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJXRUJBUElQT1JUQUwiLCJDb3Ntb3NQcm9XZWJBcGkiLCJJZGVudGl0eVNlcnZlckFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.UjzZRgXZP3y5-Qk-wrNx-sOsEx2mQh1zuPN2ImeyGAdRKWXRfJAz9HnOBjusosT_qQCHng4rMT-n06alano2QLZ6NkmvreC0Nokh1gOVwXRD_uTO8MxFcq42bys1iz1BQWDR0P91MHNohdpSfPMr5SqgZ92HuG8JQacpCRubHnosa1gQfdhwJQ1xJPV4dGBBSYDkFxQQQ4JPMU4aluFhcTBLvVepdFTt71ztlHdTU9-XtyGpmuQ_YxSazqjCFmIBU6C9Fh4vglPmswYTG75SqjATSE94Pq3OvdS3jiFTcoHkLdrFQ5t0bIJY9woP_AsZGlGqbdChQJy9E3Y5vu1rxA"

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