import {
    APP_ROOT_CHANGE,
} from './appRootActionTypes';

function appRoot(state = {
    newRoot: 'login',
}, action) {
    switch (action.type) {
    case APP_ROOT_CHANGE: {
        return Object.assign({}, state, {
            newRoot: action.newRoot,
        });
    }
    default: {
        return Object.assign({}, state, {
            newRoot: 'login',
        });
    }
    }
}

export default appRoot;
