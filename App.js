import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import { sessionService } from 'redux-react-native-session';
import SplashScreen from 'react-native-splash-screen';
import { Linking } from 'react-native';

import { dataFromUrl } from './src/utils/helpers';
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

  handleOpenURL = (event) => {
    const { url } = event;
    const route = url.replace(/.*?:\/\//g, '');
    const splitRoute = route.split('/');
    const screen = splitRoute[0];

    const { token, client_id, uid } = dataFromUrl(url);
    const sessionHeaders = {
      token,
      uid,
      client: client_id
    };

    sessionService.saveSession(sessionHeaders);

    if (screen == 'resetPassword') {
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'target.ResetPasswordScreen',
          navigatorStyle: {
            navBarHidden: true
          }
        }
      });
    }
  }

  onStoreUpdate() {
    const session = store.getState().get('session');
    const authenticated = session.get('authenticated');
    const user = session.get('user');
    const shouldUpdate = this.authenticated !== authenticated && (!authenticated || !user.isEmpty());
    if (!this.appInitialized) {
      const checked = session.get('userChecked');
      if (checked) {
        Linking.addEventListener('url', this.handleOpenURL);
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
        screen: 'target.HomeScreen',
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
