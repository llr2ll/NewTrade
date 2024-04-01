import { SideNavOuterToolbar as SideNavBarLayout } from './layouts';
import { Navigation, appInfo, appRoutes } from './environment';
import { Routes, Route, Navigate } from 'react-router-dom';

export const Content = () => {
  return <SideNavBarLayout appInfo={appInfo} navigationLayout={Navigation}>
    <Routes>
      {appRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
      <Route path='*' element={<Navigate to={"/showcase"} />} />
    </Routes>
  </SideNavBarLayout>
}