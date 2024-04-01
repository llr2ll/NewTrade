import { withNavigationWatcher } from './contexts/navigation';
import packageJson from "../package.json";
import { Showcase } from './pages';

export const localToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNzQzMjM1REFEQjgzQzExNTA4MEYxNjk2NjJCNzU0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MTE1NDE0OTIsImV4cCI6MTcxMTU0NTA5MiwiaXNzIjoiaHR0cHM6Ly9hdXRoLmNvc21vc3Byby5jb20uYnIiLCJhdWQiOiJodHRwczovL2F1dGguY29zbW9zcHJvLmNvbS5ici9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJKYXZhc2NyaXB0Q2xpZW50Iiwic3ViIjoiMjk4MjcwIiwiYXV0aF90aW1lIjoxNzExNTQxNDkyLCJpZHAiOiJsb2NhbCIsIkxvZ2luU2Vzc2lvbklEIjoiOTBlNGE0NTUtMDY2NC00NDRhLTk1OWItYjExYTc1YTI1MGE3IiwiTmFtZSI6Im12cEBtbWMiLCJGcmllbmRseU5hbWUiOiJUZXN0ZSBNVlAiLCJUZW5hbnRJZCI6IjEwMTE0IiwiUHJvZmlsZSI6IjIiLCJKb2JSb2xlIjoiMSIsIkluaXRpYWxzIjoiVE0iLCJVc2VySWRlbnRpZmljYXRpb25DaGF0IjoiVElkLTEwMTE0OlVJZC0yOTgyNzAiLCJVc2VyQ2hhdFNpZ25hdHVyZSI6IjY4OTcyZTRiNjRkNzk0NjdmNDM4MDdhZjlkODg3YzA0MmVhNDQ5OGIxNjU4YjFiOWVjM2IzM2NkYmI5OWZiYjgiLCJXZWVrZW5kU2NhbGUiOiIiLCJVc2VyTW9kdWxlc1Blcm1pc3Npb24iOiJbXSIsIlVzZXJQaWN0dXJlIjoiIiwicm9sZSI6InVzZXIiLCJMb2dvIjoiNGJmMDczNzItOTcyMi00Nzc5LWI3NGEtMjFhZTcwNDgwZDk4LnBuZyIsIk1haW5Db2xvciI6IiM0MTQxNDEiLCJGb250Q29sb3IiOiIjZmZmZmZmIiwiVGVuYW50TmFtZSI6Ik1pbmhhIE1lbGhvciBDb21wcmEiLCJUZW5hbnRLZXkiOiJGREoiLCJCcmFuY2giOiIiLCJFbWFpbCI6IiIsImp0aSI6IjVEMjA0OTY5NUYyM0U3OUU5RUQzNEI5RTEzMTQ3MkM1Iiwic2lkIjoiOTIxNkRFRDQ1NEUzQ0FBRThBMTcwNUIzNTNENzJFNzMiLCJpYXQiOjE3MTE1NDE0OTIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCIsIldFQkFQSVBPUlRBTCIsIkNvc21vc1Byb1dlYkFwaSIsIklkZW50aXR5U2VydmVyQXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.dBKF2TIWVyQhEyff5MbkBpoJ0DkcPZ5bP9bNlxvOZPAr1fnJNz_2RWxYMUgj8zE5_nCSZQ-tt10Ow9R4D13b5TNBNf_E8G9wJN08kpigdsnnoAFoHBEUgEPE067ZOLCt_1u05iz0DTgb0WgZHZ7_t_-wR7xGW4smODNfXBYPBcK1E5s6l9ybAS3ZL-dA35IT_6qUwLH-XBFAKlIu8-wDVKy6DWhORHYSOEmRdqcnJ414ydu7hb9V6LHvGfOGFSdRQCKPMThobzMs4NM3JBmX0jDUiOd2w94rNJu32dVMZ0stPwSNUbMWjjVNQB0CA8C0kuGk6HiJzWWBTQ-bVee7Aw"

export const appInfo = { title: 'Trade Marketing', version: packageJson.version }

const routes = [
  { path: '/contracts-list', element: Showcase },
  { path: '/contracts', element: Showcase },
  { path: '/showcase', element: Showcase },
  { path: '/reports', element: Showcase },
];

export const appRoutes = routes.map(route => { return { ...route, element: withNavigationWatcher(route.element, route.path) } })

export const Navigation = [
  { text: 'Vitrine', icon: 'cart', path: '/showcase' },
  { text: 'Contratos', icon: 'pasteplaintext', path: '/contracts' },
  { 
    text: 'Relatórios', 
    icon: 'columnchooser', 
    path: '/reports',
    items: [
      { text: 'Relatorio 1', icon: "datatrending", path: '' },
      { text: 'Relatorio 2', icon: "datatrending", path: '' },
      { text: 'Relatorio 3', icon: "datatrending", path: '' }
    ],
  },
]