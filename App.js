import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import { sessionService } from 'redux-react-native-session';

import configureStore from './src/store/configureStore';
import registerScreens from './src/screens'

const store = configureStore(Immutable.Map());
registerScreens(store, Provider);

class App {
  constructor() {
    this.appInitialized = false;
    sessionService.initSessionService(store);

    store.subscribe(this.onStoreUpdate.bind(this));
  }

  onStoreUpdate() {
    if (!this.appInitialized) {
      this.appInitialized = true;
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'target.LoginScreen'
        }
      });
    }
  }
}

export default App;
