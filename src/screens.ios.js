import {Navigation} from 'react-native-navigation';

import Home from './home/homeComponent';
import Login from './login/userLogin/userLoginComponent';
import Waiting from './waiting/waitingComponent';
import Recents from './recents/recentsComponent';
import Add from './add/addComponent';
import Settings from './settings/settingsComponent';

let registerScreens = (store, Provider) => {
    Navigation.registerComponent('muffin.HomeScreen', () => Home, store, Provider);
    Navigation.registerComponent('muffin.LoginScreen', () => Login, store, Provider);
    Navigation.registerComponent('muffin.WaitingScreen', () => Waiting, store, Provider);
    Navigation.registerComponent('muffin.RecentsScreen', () => Recents, store, Provider);
    Navigation.registerComponent('muffin.AddScreen', () => Add, store, Provider);
    Navigation.registerComponent('muffin.SettingsScreen', () => Settings, store, Provider);
};

export {registerScreens};
