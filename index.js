// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
import { Navigation } from 'react-native-navigation';
import App from './App';
import { switchSplashScreen } from './app/features/NavigationControler';
import RegisterScreen from './app/features/RegisterScreen';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent('App', () => App);
RegisterScreen();
Navigation.events().registerAppLaunchedListener(async () => {
    switchSplashScreen()
})
