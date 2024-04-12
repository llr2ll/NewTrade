import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import type { SideNavigationMenuProps } from '../../../types';
import { useNavigation } from '../../../contexts/navigation';
import { useScreenSize } from '../../../utils/media-query';
import CosmosIcon from "../../../assets/cosmos-icon.png";
import TreeView from 'devextreme-react/tree-view';
import * as events from 'devextreme/events';
import './SideNavigationMenu.scss';

export const SideNavigationMenu = (props: React.PropsWithChildren<SideNavigationMenuProps>) => {
  const { children, selectedItemChanged, openMenu, compactMode, onMenuReady, navigation } = props
  const { navigationData: { currentPath } } = useNavigation()
  const treeViewRef = useRef<TreeView>(null)
  const { isLarge } = useScreenSize()
  const items = useMemo(normalizePath, [])
  const wrapperRef = useRef();
  
  function normalizePath() { return navigation.map((item) => ({ ...item, expanded: isLarge, path: item.path && !/^\//.test(item.path) ? `/${item.path}` : item.path })) }

  const getWrapperRef = useCallback(
    (element) => {
      const prevElement = wrapperRef.current;
      
      if (prevElement) events.off(prevElement, 'dxclick')

      wrapperRef.current = element;
      
      events.on(element, 'dxclick', (e: React.PointerEvent) => openMenu(e))
    },
    [openMenu]
  );

  useEffect(() => {
    const treeView = treeViewRef.current && treeViewRef.current.instance;
    if (!treeView) return

    if (currentPath !== undefined) {
      treeView.selectItem(currentPath);
      treeView.expandItem(currentPath);
    }

    if (compactMode) treeView.collapseAll()
  }, [currentPath, compactMode]);

  return <div className='dx-swatch-additional side-navigation-menu' ref={getWrapperRef}>
    {children}

    <div className='menu-container'>
      <TreeView onItemClick={selectedItemChanged}
                itemRender={RenderNavigationItem}
                onContentReady={onMenuReady}
                focusStateEnabled={false}
                selectionMode='single'
                expandEvent='click'
                ref={treeViewRef}
                items={items}
                keyExpr='path'
                width='100%'/>
    </div>
    
    <footer className='footer'> 
      Copyright © {new Date().getFullYear()} 
        <br /> 
        <img alt='logo' width={13} height={13} src={CosmosIcon}/> Cosmos Pro Trade Marketing Inc.
    </footer>
  </div>
};

function RenderNavigationItem(data){
  return <div className='NavigationItem'>
    <div>
      <i className={`dx-icon-${data.icon}`}></i>
      <p>{data.text}</p>
    </div>
  </div>
}