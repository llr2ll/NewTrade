import { DataGrid, DropDownBox, Form, Gallery, List, LoadPanel, Popup, SelectBox } from 'devextreme-react';
import { DataSourceOptions } from 'devextreme/data/data_source';
import { TreeViewTypes } from 'devextreme-react/tree-view';
import { ButtonTypes } from 'devextreme-react/button';
import ODataStore from 'devextreme/data/odata/store';
import React, { ReactNode } from 'react';

export interface AppHeaderProps {
  toggleMenu: (e: ButtonTypes.ClickEvent) => void;
  menuToggleEnabled: boolean;
  className?: string;
}

export interface SideNavigationMenuProps {
  selectedItemChanged: (e: TreeViewTypes.ItemClickEvent) => void;
  openMenu: (e: React.PointerEvent) => void;
  compactMode: boolean;
  onMenuReady: (e: TreeViewTypes.ContentReadyEvent) => void;
  navigation: navigationItem[];
}

interface navigationItem {
  text: string,
  icon: string,
  path: string,
}

export interface SideNavToolbarProps { title: string; version: string }

export type Handle = () => void;

interface NavigationData {
  currentPath: string;
}

export type NavigationContextType = {
  setNavigationData?: ({ currentPath }: NavigationData) => void;
  navigationData: NavigationData;
}

export interface DataStore { 
  store: ODataStore, 
  paginate: boolean, 
  pageSize: number, 
  sort?: sort[]
}

export interface sort { selector: string, desc: boolean }

export type IDropDownBox = React.MutableRefObject<DropDownBox>
export type ISelectBox = React.MutableRefObject<SelectBox>
export type ILoadPanel = React.MutableRefObject<LoadPanel>
export type IFormSubmit = React.FormEvent<HTMLFormElement>
export type IDatagrid = React.MutableRefObject<DataGrid>
export type IGalery = React.MutableRefObject<Gallery>
export type IDevexForm = React.MutableRefObject<Form>
export type IForm = React.RefObject<HTMLFormElement>
export type IList = React.RefObject<List>

export interface OrderType {
  InResultId:    number;
  ExecutionGuid: string;
  TIPO_DEMANDA:  number;
  DESCRICAO:     string;
}

export interface Store {
  InResultId:    number;
  ExecutionGuid: string;
  CLIENTE_CNPJ:  number;
  CNPJ:          string;
  IDENTIFICAO:   string;
}

export interface ImportfileModel {
  DESCRICAO:      string,
  MODELO_ARQUIVO: string
  URL_ARQUIVO:    string,
  URL_MANUAL:     string
}

export interface Banner {
  InResultId:         number;
  ExecutionGuid:      string;
  $$ID:               number;
  BANNER_MMC_WEB:     number;
  DESCRICAO:          string;
  IMAGEM:             string;
  __ANEXOFILE_IMAGEM: string;
  ORDEM:              number;
}

export type CardProps = { 
  title?: string; 
  additionalHeaderContent?: ReactNode; 
  isLoading?: boolean; 
  menuVisible?: boolean, 
  gridRef: any, 
  height?: string,
  cardHeight?: string
}

export type GetCustomStore = {
  get?: {
    customViewName:         string;
    getErrorMessage:        string;
    dataSourceOptions?:     DataSourceOptions;
    keyExpr?:               string;
  };
  post?: {
    postCustomActionName:   string;
    postSuccessMessage?:    string; 
    postErrorMessage:       string;
  }
  remove?: {
    removeCustomActionName: string;
    removeSuccessMessage?:  string;
    removeErrorMessage:     string;
  }
}

export interface Report {  
  text: string,
  icon: string,
  path: string,
  link: string
}