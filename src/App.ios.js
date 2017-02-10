import {Component} from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import homeReducer from './home/homeReducers';
import appRootReducer from './login/appRoot/appRootReducers';

import {appInitialized} from './login/appRoot/appRootActions';

import {iconsMap, iconsLoaded} from './utils/AppIcons.js';
import {registerScreens} from './screens';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers({
    home: homeReducer,
    appRoot: appRootReducer,
});

const store = createStoreWithMiddleware(reducer);

registerScreens(store, Provider);

class App extends Component {
    constructor(props) {
        super(props);
        store.subscribe(this.onStoreUpdate.bind(this));
        iconsLoaded.then(() => {
            store.dispatch(appInitialized());
        });
    }

    onStoreUpdate() {
        const root = store.getState().appRoot.newRoot;
        // handle a root change
        if (this.currentRoot != root) {
            this.currentRoot = root;
            this.startApp(root);
        }
    }

    startApp(root) {
        console.log(root);
        switch(root) {
            case 'main': {
                Navigation.startTabBasedApp({
                    tabs: [
                        {
                            label: 'Home',
                            screen: 'muffin.HomeScreen',
                            icon: iconsMap['ios-home-outline'],
                            selectedIcon: iconsMap['ios-home'],
                            title: 'Home',
                        },
                        {
                            label: 'Add',
                            screen: 'muffin.HomeScreen',
                            icon: iconsMap['ios-add-circle-outline'],
                            selectedIcon: iconsMap['ios-add-circle'],
                        },
                        {
                            label: 'Recents',
                            screen: 'muffin.HomeScreen',
                            icon: iconsMap['ios-clock-outline'],
                            selectedIcon: iconsMap['ios-clock'],
                            title: 'Home',
                        },
                        {
                            label: 'Settings',
                            screen: 'muffin.HomeScreen',
                            icon: iconsMap['ios-settings-outline'],
                            selectedIcon: iconsMap['ios-settings'],
                            title: 'Home',
                        },
                    ],
                    tabsStyle: {
                        tabBarBackgroundColor: '#99d3e5',
                        tabBarButtonColor: '#FFFFFF',
                        tabBarSelectedButtonColor: '#FFFFFF',
                    },
                });
            }
            case 'login': {
                Navigation.startSingleScreenApp({
                    screen: {
                        screen: 'muffin.LoginScreen',
                        title: 'Login',
                    },
                });
            }
        }
    }
};

export default App;
