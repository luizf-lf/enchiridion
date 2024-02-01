import { Route, Switch, useLocation } from 'react-router-dom';

// components
import SidebarMenu from './components/SidebarMenu';

// pages
import HomeDial from './pages/HomeDial';
import Clicker from './pages/Clicker';
import Page404 from './pages/Page404';

import './assets/styles/global.scss';
import styles from './assets/styles/pages/app.module.scss';
import { AnimatePresence } from 'framer-motion';

function App() {
  /* 
    The useLocation hook is necessary for the AnimatePresence to detect when a component
      will umount and apply the 'exit' animation. Also, the key prop applied to the switch
  */
  const location = useLocation();
  return (
    <div className={styles.appWrapper}>
      <SidebarMenu />
      <main>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/">
              <HomeDial />
            </Route>
            <Route exact path="/playground">
              <HomeDial />
            </Route>
            <Route path="/playground/clicker">
              <Clicker />
            </Route>

            {/* Default route */}
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
