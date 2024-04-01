import { SideNavOuterToolbar as SideNavBarLayout } from './layouts';
import { Navigation, appRoutes } from './environment';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getCustomStore } from './devextreme';
import { useEffect, useState } from 'react'

export const Content = () => {
  const [ showContent, setShowContent ] = useState<boolean>(false)

  useEffect(() => {
    getCustomStore({ get: { customViewName: "TPC_TRADE_RELATORIOS", getErrorMessage: "Falha ao trazer os relatórios" } })
      .load()
      .then((res: any) => {    
        let reports:any = Navigation[2]

        for (let i = 0; i < res.length; i++) {
          reports.items.push({
            text: res[i].text,
            icon: "datatrending",
            path: `/relatorio${i}`,
            link: res[i].lik
          });
        }
        
        setShowContent(true)
      })
  },[])

  if(showContent) {
    return <SideNavBarLayout navigationLayout={Navigation}>
      <Routes>
        {appRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
        <Route path='*' element={<Navigate to={"/showcase"} />} />
      </Routes>
    </SideNavBarLayout>
  }
  else return <></>
}