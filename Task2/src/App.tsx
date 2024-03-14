import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonMenu, IonRouterOutlet, setupIonicReact, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import About from './pages/About';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  setupIonicReact();

  return (
    <IonApp>
      <IonMenu side='start' contentId='main-content'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/home" routerDirection="none">
              Home
            </IonItem>
            <IonItem routerLink="/about" routerDirection="none">
              About
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonReactRouter>
        <IonRouterOutlet id='main-content'>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
      <IonMenuButton slot="start"></IonMenuButton>
    </IonApp>

  );
}

export default App;
