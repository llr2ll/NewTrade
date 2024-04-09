import { DataGrid, DropDownBox, Form, Gallery, List, LoadPanel, Popup, SelectBox, TileView } from 'devextreme-react';
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
export type ITileView = React.RefObject<TileView>
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

export const InitialFilters = { 
  TIPO_COMPOSICAO_TRADE: null, 
  NOME_REDUZIDO: null, 
  ESTADO: null, 
  CIDADE: null, 
  BAIRRO: null
}

export interface IShowCaseContext {
  neighborhoodRef: ISelectBox, 
  stateRef:        ISelectBox, 
  storeRef:        ISelectBox, 
  typeRef:         ISelectBox, 
  cityRef:         ISelectBox, 
  showCaseListRef: ITileView,
  setFilters:      Function,
  filters:         typeof InitialFilters
}

export interface IContract {
  InResultId:                      number;
  CONTRATO_TRADE:                  number;
  DESCRICAO_ACAO:                  string;
  DATA_INICIAL:                    string;
  DATA_FINAL:                      string;
  ENTIDADE:                        number;
  NOME_ENTIDADE:                   string;
  FORMA_PAGAMENTO:                 number;
  DESCRICAO_FORMA_PAGAMENTO:       string;
  STATUS_CONTRATO_TRADE:           number;
  DESCRICAO_STATUS_CONTRATO_TRADE: string;
  IMAGEM:                          string;
  VALOR:                           any;
}

export interface IContractItem {
  ACAO_TRADE_PROVISAO:  number,
  TIPO_COMPOSICAO:      string,
  CONTRATO_TRADE:       number,
  ExecutionGuid:        string,
  COMPLEMENTO:          string,
  InResultId:           number,
  QUANTIDADE:           string,
  ESTADO:               string,
  CIDADE:               string,
  BAIRRO:               string,
  IMAGEM:               string,
  VALOR:                any,
  LOJA:                 string,
}

export interface IShowCaseItem {
  InResultId:            number;
  ExecutionGuid:         string;
  FICHA:                 string;
  ACAO_TRADE_PROVISAO:   string;
  datasheet_form_id:     string;
  COMPLEMENTO:           string;
  ESTADO:                string;
  CIDADE:                string;
  BAIRRO:                string;
  LOJA:                  string;
  QUANTIDADE:            string;
  VALOR:                 any;
  TIPO_COMPOSICAO:       string;
  TIPO_COMPOSICAO_TRADE: string;
  ORDEM:                 string;
  IMAGEM:                string;
  FAVORITADO:            string;
}