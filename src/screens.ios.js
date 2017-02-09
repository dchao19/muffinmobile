import {Navigation} from 'react-native-navigation';

import Home from './home/homeComponent';

let registerScreens = () => {
    Navigation.registerComponent('muffin.HomeScreen', () => Home);
};

export {registerScreens};
