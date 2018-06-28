import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Immutable from 'immutable';

import configureStore from './src/store/configureStore';
import registerScreens from './src/screens'

const store = configureStore(Immutable.Map());
registerScreens(store, Provider);

class App {
  constructor() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'target.LoginScreen'
      }
    });
  }
}

export default App;
