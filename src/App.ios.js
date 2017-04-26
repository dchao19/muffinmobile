import {Component} from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import homeReducer from './home/homeReducers';
import appRootReducer from './login/appRoot/appRootReducers';
import userLoginReducer from './login/userLogin/userLoginReducers';

import rootSaga from './RootSaga';

import {
    appInitialized,
    changeAppRoot,
} from './login/appRoot/appRootActions';

import {
    getAuthStatus,
} from './login/userLogin/userLoginActions';

import {iconsMap, iconsLoaded} from './utils/AppIcons.js';
import {registerScreens} from './screens';

const logger = createLogger();

const sagaMiddleWare = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
    sagaMiddleWare,
    logger
)(createStore);

const reducer = combineReducers({
    appRoot: appRootReducer,
    userLogin: userLoginReducer,
    home: homeReducer,
});

const store = createStoreWithMiddleware(reducer);

sagaMiddleWare.run(rootSaga);

registerScreens(store, Provider);

class App extends Component {
    hasLoaded = false;
    currentRoot = '';

    constructor(props) {
        super(props);
        store.subscribe(this.onStoreUpdate.bind(this));
        iconsLoaded.then(() => {
            try {
                store.dispatch(appInitialized());
                store.dispatch(getAuthStatus());
            } catch (e) {
                throw new Error(e);
            }
        });
    }

    onStoreUpdate() {
        const authenticated = store.getState().userLogin.authenticated;
        const fetched = store.getState().userLogin.fetched;
        const root = store.getState().appRoot.newRoot;

        // handle a root change
        if (this.currentRoot != root) {
            this.currentRoot = root;
            return this.startApp(root);
        }

        // handle a change in authstatus
    }

    startApp(root) {
        console.log(root);
        switch(root) {
            case 'main':
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
                            screen: 'muffin.AddScreen',
                            icon: iconsMap['ios-add-circle-outline'],
                            selectedIcon: iconsMap['ios-add-circle'],
                            title: 'Add',
                        },
                        {
                            label: 'Recents',
                            screen: 'muffin.RecentsScreen',
                            icon: iconsMap['ios-clock-outline'],
                            selectedIcon: iconsMap['ios-clock'],
                            title: 'Recents',
                        },
                        {
                            label: 'Settings',
                            screen: 'muffin.SettingsScreen',
                            icon: iconsMap['ios-settings-outline'],
                            selectedIcon: iconsMap['ios-settings'],
                            title: 'Settings',
                        },
                    ],
                    tabsStyle: {
                        tabBarBackgroundColor: '#99d3e5',
                        tabBarButtonColor: '#FFFFFF',
                        tabBarSelectedButtonColor: '#FFFFFF',
                    },
                });
                break;
            case 'login':
                Navigation.startSingleScreenApp({
                    screen: {
                        screen: 'muffin.LoginScreen',
                        title: 'Login',
                    },
                });
                break;
            case 'waiting':
                Navigation.startSingleScreenApp({
                    screen: {
                        screen: 'muffin.WaitingScreen',
                        title: 'Waiting',
                    },
                });
                break;
            default:
                Navigation.startSingleScreenApp({
                    screen: {
                        screen: 'muffin.WaitingScreen',
                        title: 'Empty',
                    },
                });
                break;
        }
    }
};

export default App;
