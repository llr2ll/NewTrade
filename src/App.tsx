import ptMessages from "devextreme/localization/messages/pt.json";
import { locale, loadMessages } from "devextreme/localization";
import { useThemeContext, ThemeContext } from './theme/theme';
import { NavigationProvider } from './contexts/navigation';
import { useScreenSizeClass } from './utils/media-query';
import { HashRouter as Router } from 'react-router-dom';
import 'devexpress-gantt/dist/dx-gantt.css';
import { Content } from './Content';
import './styles.scss';
import './theme/theme';

export const App = () => {
  const loader:any = document.querySelector('#loader-div')
  loader.style.display = "none"
  const screenSizeClass = useScreenSizeClass();
  const themeContext = useThemeContext();
  
  locale(navigator.language)
  loadMessages(ptMessages)
  
  return (
    <Router>
      <ThemeContext.Provider value={themeContext}>
          <NavigationProvider>
            <div className={`app ${screenSizeClass}`}>
              {themeContext.isLoaded && <Content />}
            </div>
          </NavigationProvider>
      </ThemeContext.Provider>
    </Router>
  );
};