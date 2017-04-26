import {
    APP_ROOT_CHANGE,
    APP_INITIALIZED,
} from './appRootActionTypes';

export function changeAppRoot(newRoot) {
    return {
        type: APP_ROOT_CHANGE,
        newRoot,
    };
}

export function appInitialized() {
    return {
        type: APP_INITIALIZED,
    };
}
