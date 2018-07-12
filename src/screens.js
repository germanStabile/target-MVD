import { Navigation } from 'react-native-navigation';

import LoginScreen from './containers/LoginScreen';
import CreateAccountScreen from './containers/CreateAccountScreen';
import LoggedInScreen from './containers/LoggedInScreen';
import HomeScreen from './containers/HomeScreen';
import ResetPasswordScreen from './containers/ResetPasswordScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('target.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('target.CreateAccountScreen', () => CreateAccountScreen, store, Provider);
  Navigation.registerComponent('target.LoggedInScreen', () => LoggedInScreen, store, Provider);
  Navigation.registerComponent('target.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('target.ResetPasswordScreen', () => ResetPasswordScreen, store, Provider);
};

export default registerScreens;
