import { Navigation } from 'react-native-navigation';

import LoginScreen from './containers/LoginScreen';
import CreateAccountScreen from './containers/CreateAccountScreen';
import LoggedInScreen from './containers/LoggedInScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('target.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('target.CreateAccountScreen', () => CreateAccountScreen, store, Provider);
  Navigation.registerComponent('target.LoggedInScreen', () => LoggedInScreen, store, Provider);
};

export default registerScreens;
