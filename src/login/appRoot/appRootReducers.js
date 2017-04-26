import {
    APP_ROOT_CHANGE,
} from './appRootActionTypes';

function appRoot(state = {
    newRoot: 'waiting',
}, action) {
    switch (action.type) {
    case APP_ROOT_CHANGE:
        return Object.assign({}, state, {
            newRoot: action.newRoot,
        });
    default:
        return state;
    }
}

export default appRoot;
