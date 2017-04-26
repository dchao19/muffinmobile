import {takeEvery} from 'redux-saga/effects';

import * as actions from './appRootActionTypes';

function* appInitialized(action) {
    return;
}

export function* watchAppInitalized() {
    yield takeEvery(actions.APP_INITIALIZED, appInitialized);
}
