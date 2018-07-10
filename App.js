import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import { sessionService } from 'redux-react-native-session';
import SplashScreen from 'react-native-splash-screen';

import configureStore from './src/store/configureStore';
import registerScreens from './src/screens';

const store = configureStore(Immutable.Map());
registerScreens(store, Provider);

class App {
  constructor() {
    this.appInitialized = false;
    this.authenticated = false;
    sessionService.initSessionService(store);

    store.subscribe(this.onStoreUpdate.bind(this));
  }

  onStoreUpdate() {
    const session = store.getState().get('session');
    const authenticated = session.get('authenticated');
    const user = session.get('user');
    const shouldUpdate = this.authenticated !== authenticated && (!authenticated || !user.isEmpty());
    if (!this.appInitialized) {
      const checked = session.get('userChecked');
      if (checked) {
        SplashScreen.hide();
        this.appInitialized = true;
        this.authenticated = authenticated;
        this.startApp(authenticated);
      }
    } else if (shouldUpdate) {
      this.authenticated = authenticated;
      this.startApp(authenticated);
    }
  }

  startAuthenticatedApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'target.LoggedInScreen',
        navigatorStyle: {
          navBarHidden: true
        }
      }
    });
  }

  startApp(authenticated) {
    if (authenticated) {
      this.startAuthenticatedApp();
    } else {
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'target.LoginScreen',
          navigatorStyle: {
            navBarHidden: true
          }
        }
      });
    }
  }
}

export default App;
