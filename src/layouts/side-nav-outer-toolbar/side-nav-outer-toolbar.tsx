
import { AppHeader, SideNavigationMenu } from '../../components';
import { Template } from 'devextreme-react/core/template';
import { useScreenSize } from '../../utils/media-query';
import React, { useState, useCallback } from 'react';
import { useMenuPatch } from '../../utils/patches';
import Drawer from 'devextreme-react/drawer';
import { useNavigate } from 'react-router';
import './side-nav-outer-toolbar.scss';

export const SideNavOuterToolbar = ({ children, navigationLayout }: React.PropsWithChildren<any>) => {
  const navigate = useNavigate();
  const { isXSmall, isLarge } = useScreenSize();
  const [patchCssClass, onMenuReady] = useMenuPatch();
  const [menuStatus, setMenuStatus] = useState(isLarge ? MenuStatus.Opened : MenuStatus.Closed);

  const toggleMenu:any = useCallback(({ event }) => {
    setMenuStatus((prevMenuStatus) => (prevMenuStatus === MenuStatus.Closed ? MenuStatus.Opened : MenuStatus.Closed));
    event.stopPropagation();
  }, []);

  const temporaryOpenMenu = useCallback(() => {
    setMenuStatus((prevMenuStatus) => (prevMenuStatus === MenuStatus.Closed ? MenuStatus.TemporaryOpened : prevMenuStatus));
  }, []);

  const onOutsideClick = useCallback(() => {
    setMenuStatus((prevMenuStatus) => (prevMenuStatus !== MenuStatus.Closed && !isLarge ? MenuStatus.Closed : prevMenuStatus));
    return !isLarge;
  }, [isLarge]);

  const onNavigationChanged:any = useCallback(
    ({ itemData: { path, link }, event, node }) => {
      if(link) window.open(link, '_blank')

      if (menuStatus === MenuStatus.Closed || !path || node.selected) {
        event.preventDefault();
        return;
      }

      navigate(path);
      if (!isLarge || menuStatus === MenuStatus.TemporaryOpened) {
        setMenuStatus(MenuStatus.Closed);
        event.stopPropagation();
      }
    },
    [navigate, menuStatus, isLarge]
  );

  return <div className='side-nav-outer-toolbar'>
    <AppHeader className='layout-header' menuToggleEnabled toggleMenu={toggleMenu}/>
    <Drawer className={['drawer layout-body', patchCssClass].join(' ')}
            opened={menuStatus === MenuStatus.Closed ? false : true}
            openedStateMode={isLarge ? 'shrink' : 'overlap'}
            revealMode={isXSmall ? 'slide' : 'expand'}
            closeOnOutsideClick={onOutsideClick}
            shading={isLarge ? false : true}
            position='before'
            template='menu'
            maxSize={250}
            minSize={0}>

      <div className='content'>
        {React.Children.map(children, item => React.isValidElement(item) && item)}
      </div>
      
      <Template name='menu'>
        <SideNavigationMenu compactMode={true} selectedItemChanged={onNavigationChanged} navigation={navigationLayout} openMenu={temporaryOpenMenu} onMenuReady={onMenuReady}/>
      </Template>
    </Drawer>
  </div>
}

const MenuStatus = { Closed: 1, Opened: 2, TemporaryOpened: 3 }