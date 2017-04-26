import {call, put, takeEvery, select} from 'redux-saga/effects';

import {
    receiveCurrentBalance,
    retrieveCurrentBalance,
    errorCurrentBalance,
} from './homeActions';

import {
    GET_CURRENT_BALANCE,
} from './homeActionTypes';

import {apiBalanceRequest} from './homeAPIActions';

export const getIdToken = (state) => state.userLogin.idToken;

function* getCurrentBalance(action) {
    try {
        yield put(retrieveCurrentBalance());
        let idToken = yield select(getIdToken);
        const apiData = yield call(apiBalanceRequest, idToken);

        yield put(receiveCurrentBalance(apiData));
    } catch (e) {
        console.error(e);
        yield put(errorCurrentBalance(e));
    }
}

export function* watchGetCurrentBalance() {
    yield takeEvery(GET_CURRENT_BALANCE, getCurrentBalance);
}
