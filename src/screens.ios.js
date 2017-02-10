import {Navigation} from 'react-native-navigation';

import Home from './home/homeComponent';
import Login from './login/userLogin/userLoginComponent';

let registerScreens = (store, Provider) => {
    Navigation.registerComponent('muffin.HomeScreen', () => Home, store, Provider);
    Navigation.registerComponent('muffin.LoginScreen', () => Login, store, Provider);
};

export {registerScreens};
