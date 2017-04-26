import * as actions from './userLoginActionTypes';

export function requestAuthStatus() {
    return {
        type: actions.REQUEST_AUTHENTICATION_STATUS,
        fetched: false,
    };
}

export function receiveAuthStatus(authenticated) {
    return {
        type: actions.RECEIVE_AUTHENTICATION_STATUS,
        fetched: true,
        authenticated,
    };
}

export function errorAuthStatus(error) {
    let {errorMessage, errorCode} = error;
    return {
        type: actions.ERROR_AUTHENTICATION_STATUS,
        fetched: true,
        authenticated: false,
        errorMessage,
        errorCode,
    };
}

export function getAuthStatus() {
    return {
        type: actions.GET_AUTHENTICATION_STATUS,
    };
}

export function requestIdToken() {
    return {
        type: actions.REQUEST_ID_TOKEN,
    };
}

export function receiveIdToken(idToken) {
    return {
        type: actions.RECEIVE_ID_TOKEN,
        idToken,
    };
}

export function errorIdToken(error) {
    let {errorMessage, errorCode} = error;
    return {
        type: actions.ERROR_ID_TOKEN,
        idToken: '',
        errorMessage,
        errorCode,
    };
}
