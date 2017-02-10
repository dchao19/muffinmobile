import {
    APP_ROOT_CHANGE,
} from './appRootActionTypes';

export function appInitialized() {
  return async function(dispatch, getState) {
    // since all business logic should be inside redux actions
    // this is a good place to put your app initialization code
    dispatch(changeAppRoot('login'));
  };
}

export function changeAppRoot(newRoot) {
    return {
        type: APP_ROOT_CHANGE,
        newRoot,
    };
}
