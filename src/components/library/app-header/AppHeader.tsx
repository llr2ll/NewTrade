import Toolbar, { Item } from 'devextreme-react/toolbar';
import type { AppHeaderProps } from '../../../types';
import { ThemeContext } from '../../../theme/theme';
import { useCallback, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'devextreme-react/button';
import './AppHeader.scss';

export const AppHeader = ({ menuToggleEnabled, appInfo, toggleMenu, className }: AppHeaderProps) => {
  const themeContext = useContext(ThemeContext);
  const navigate = useNavigate()

  const onButtonClick = useCallback(() => themeContext?.switchTheme(), [])

  function toggleFullScreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else { document.exitFullscreen && document.exitFullscreen() }
  }

  return <header className={`header-component ${className}`}>
    <Toolbar className='header-toolbar'>
      <Item visible={menuToggleEnabled} location='before' widget='dxButton' cssClass='menu-button'>
        <Button icon='menu' stylingMode='text' onClick={toggleMenu} />
      </Item>
      <Item location='before' visible={!!appInfo.title}><div className='header-title' onClick={() => navigate('/')}>{appInfo.title}</div></Item>
      <Item location='before' cssClass='header-version' text={"v." + appInfo.version} visible={!!appInfo.title} />
      <Item location='after' locateInMenu='never'>
        <div><Button icon={"fullscreen"} className='theme-button' onClick={toggleFullScreen} stylingMode='text'/></div>
      </Item>
      <Item location='after' locateInMenu='never'>
        <div>
          <Button icon={`${themeContext?.theme !== 'dark' ? 'moon' : 'sun'}`} className='theme-button' onClick={onButtonClick} stylingMode='text'/>
        </div>
      </Item>
    </Toolbar>
  </header>
}