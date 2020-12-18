import { Navigation } from "react-native-navigation";
import BuuTaScreen from "./BuuTaScreen";
import SplashScreen from './SplashScreen';
import BuuTaTinTucScreen from './BuuTaScreen/BuuTaTinTucScreen'
import BuuTaTroChuyenScreen from "./BuuTaScreen/BuuTaTroChuyenScreen";
import BuuTaHomeScreen from "./BuuTaScreen/BuuTaHomeScreen";
import BuuTaNotifyScreen from "./BuuTaScreen/BuuTaNotifyScreen";

export default function RegisterScreen(){
    Navigation.registerComponent('navigation.VTMan.SplashScreen', () => SplashScreen);
    Navigation.registerComponent('navigation.VTMan.BuuTaScreen', () => BuuTaScreen);
    Navigation.registerComponent('navigation.VTMan.BuuTaTinTucScreen', () => BuuTaTinTucScreen);
    Navigation.registerComponent('navigation.VTMan.MessengerScreen.TK', () => BuuTaTroChuyenScreen);
    Navigation.registerComponent('navigation.VTMan.BuuTaHomeScreen', () => BuuTaHomeScreen);
    Navigation.registerComponent('navigation.VTMan.BuuTaNotifyScreen', () => BuuTaNotifyScreen)
}
