import {Component} from 'react';
import {Navigation} from 'react-native-navigation';

import {iconsMap, iconsLoaded} from './utils/AppIcons.js';
import {registerScreens} from '../screens';

registerScreens();

class App extends Component {
    constructor(props) {
        super(props);
        iconsLoaded.then(() => {
            this.startApp();
        });
    }

    startApp() {
        let homeIcon = iconsMap['ios-home'];
        Navigation.startTabBasedApp({
            tabs: [
                label: 'Home',
                screen: 'muffin.HomeScreen',
                icon: homeIcon,
                selectedIcon: homeIcon,
                title: "Home",
            ],
        });
    }
};

export default App;
