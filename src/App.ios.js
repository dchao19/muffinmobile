import {Component} from 'react';
import {Navigation} from 'react-native-navigation';

import {iconsMap, iconsLoaded} from './utils/AppIcons.js';
import {registerScreens} from './screens';

registerScreens();

class App extends Component {
    constructor(props) {
        super(props);
        //this.startApp();
        iconsLoaded.then(() => {
            this.startApp();
        });
    }

    startApp() {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Home',
                    screen: 'muffin.HomeScreen',
                    icon: iconsMap['ios-home'],
                    selectedIcon: iconsMap['ios-home'],
                    title: 'Home',
                },
            ],
        });
    }
};

export default App;
