import {call, put, takeEvery, select} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';

import {
    requestAuthStatus,
    receiveAuthStatus,
    errorAuthStatus,
    requestIdToken,
    receiveIdToken,
} from './userLoginActions';


import {
    changeAppRoot,
} from '../appRoot/appRootActions';


import * as actions from './userLoginActionTypes';

import {authStatusRequest, retrieveIdToken} from './userLoginAPIActions';

const selectIdToken = (state) => state.userLogin.idToken;

function* getAuthStatus(action) {
    try {
        // yield put(requestAuthStatus()); // dispatch wanting to request
        // yield put(requestIdToken()); // dispatch request for id token

        let idToken = yield call(retrieveIdToken);
        // check token status with server
        const apiData = yield call(authStatusRequest, idToken);

        // commit the data to the store
        yield put(receiveAuthStatus(apiData));

        if (apiData) {
            yield put(receiveIdToken(idToken));
            yield put(changeAppRoot('main'));
        } else {
            yield put(changeAppRoot('login'));
        }
    } catch(e) {
        if (e.errorCode === -1 || e.errorCode === 401) {
            yield put(receiveAuthStatus(false));
            yield put(changeAppRoot('login'));
        } else {
            yield put(errorAuthStatus(e));
        }
    }
}

function* getIdToken() {
    try {
        // retrieve the idToken from the server
        let idToken = yield call(retrieveIdToken);
        yield put(receiveIdToken(idToken)); // commit the data to the store
    } catch (e) {
        yield call(console.error, e);
        // TODO: error handling
    }
}

function* saveIdToken(action) {
    try {
        yield call(AsyncStorage.setItem, '@Muffin:idToken', action.idToken);
    } catch (e) {
        yield call(console.error, e);

        // TODO: error handling
    }
}


export function* watchRequestIdToken() {
    yield takeEvery(actions.REQUEST_ID_TOKEN, getIdToken);
}

export function* watchReceiveIdToken() {
    yield takeEvery(actions.RECEIVE_ID_TOKEN, saveIdToken);
}

export function* watchGetAuthStatus() {
    yield takeEvery(actions.GET_AUTHENTICATION_STATUS, getAuthStatus);
}

