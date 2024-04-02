import { withNavigationWatcher } from './contexts/navigation';
import { Report, SideNavToolbarProps } from './types';
import { Showcase, Contracts } from './pages';
import packageJson from "../package.json";

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTIwOTE5OTcsImV4cCI6MTcxMjA5NTU5NywiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMjkwMjg3IiwiYXV0aF90aW1lIjoxNzEyMDc2NTgxLCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiY2ExMDNhYjUtODE2Zi00YmFjLWE1Y2MtZTZjZWFiNzMzOTE0IiwiTmFtZSI6ImFkbWluQGZhcm1hLmNvbS5iciIsIkZyaWVuZGx5TmFtZSI6IkFkbWlsc29uIE1hcnRpbnMgTGltYSIsIlRlbmFudElkIjoiMTAyODQiLCJQcm9maWxlIjoiMSIsIkpvYlJvbGUiOiIxIiwiSW5pdGlhbHMiOiJBTCIsIlVzZXJJZGVudGlmaWNhdGlvbkNoYXQiOiJUSWQtMTAyODQ6VUlkLTI5MDI4NyIsIlVzZXJDaGF0U2lnbmF0dXJlIjoiMGFkODBhZGMyOTMwMGQ2NmJhNjI3NjAyMjI1MDRhNDJhMDc0NDZhNDQ5YzhmYzFkYzE0ZTc2OWYwY2Y4MGJhNyIsIldlZWtlbmRTY2FsZSI6IjEiLCJVc2VyTW9kdWxlc1Blcm1pc3Npb24iOiJbXSIsIlVzZXJQaWN0dXJlIjoiN2NjOTRjNjktZDE2YS00N2UxLWIwM2MtODM4NTg1ZTg3NDIzLnBuZyIsInJvbGUiOiJhZG1pbiIsIkxvZ28iOiJhOGViYzU5NC00NTVkLTQyZWMtYjEyZS0wY2Q3MGQyYzQ1NDAucG5nIiwiTWFpbkNvbG9yIjoiIzMyNUNBNSIsIkZvbnRDb2xvciI6IiNmZmZmZmYiLCJUZW5hbnROYW1lIjoiRmFybWEgVHJlaW5hbWVudG8iLCJUZW5hbnRLZXkiOiJGQVIiLCJCcmFuY2giOiIxIiwiRW1haWwiOiJhZG1pbkBmYXJtYS5jb20uYnIiLCJqdGkiOiI3NERGQTU3MkVBNjAxODlGMTM2NjM2ODFDNkRENkVBNCIsInNpZCI6IkQ3MDI4NjBDNkMzMTJDMEJDOTlEQUIwRTc2N0RBMjFGIiwiaWF0IjoxNzEyMDkxOTk3LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJXRUJBUElQT1JUQUwiLCJDb3Ntb3NQcm9XZWJBcGkiLCJJZGVudGl0eVNlcnZlckFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.HOtK7_0cOMrC-9KSavnDM9MAV6ox5Akmlsd_QT1GQDTdAJo0uyqz6iCU7y3a_RthIQvQ0NKlTnhSOZvM1pY0qfQYibq7khBnQIECZBMifbaj1Zok06gZKErJXM0NqhMJFX7JYYvJ9So8syaSrrqe6nfqKbhoBcalWStbWu2fWJs01z3GFPGQFt5xWHnSL4axI_NjKrFzG07-m5JHrdTzR5vWO4TTLpz5YLbOePUveUA0JzZXUFYzPOlpcE9ajEBtXj_EN09mWaS3rGqPlOcFcFDzRsz2tZUiavoGg7sXjENxJMFcjQuBVNS7ERfUaSP9Ghu0G7uiHZgyQm28jy0LvA"

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