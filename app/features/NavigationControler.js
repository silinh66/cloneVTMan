import { Navigation } from "react-native-navigation"

export const switchSplashScreen = () => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'navigation.VTMan.SplashScreen'
            }
        }
    })
}

export function switchToBuuTaSceen(){
    Navigation.setRoot({
        root: {
            component: {
                name: 'navigation.VTMan.BuuTaScreen'
            }
        }
    })
}