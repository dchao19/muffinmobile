import {
    REQUEST_ID_TOKEN,
    RECEIVE_ID_TOKEN,
    ERROR_ID_TOKEN,
    REQUEST_AUTHENTICATION_STATUS,
    RECEIVE_AUTHENTICATION_STATUS,
    ERROR_AUTHENTICATION_STATUS,
} from './userLoginActionTypes';

function userData(state = {
    idToken: '',
    fetched: false,
    authenticated: false,
}, action) {
    switch(action.type) {
    case RECEIVE_AUTHENTICATION_STATUS:
        return Object.assign({}, state, {
            fetched: true,
            authenticated: action.authenticated,
        });
    case REQUEST_AUTHENTICATION_STATUS:
        return Object.assign({}, state, {
            fetched: false,
        });
    case ERROR_AUTHENTICATION_STATUS: {
        const {authenticated, fetched, errorCode, errorMessage} = action;
        return Object.assign({}, state, {
            authenticated,
            fetched,
            errorCode,
            errorMessage,
        });
        break;
    }
    case RECEIVE_ID_TOKEN:
        return Object.assign({}, state, {
            idToken: action.idToken,
            fetched: true,
            authenticated: true,
        });
    case ERROR_ID_TOKEN: {
        const {idToken, errorCode, errorMessage} = action;
        return Object.assign({}, state, {
            idToken,
            errorCode,
            errorMessage,
        });
        break;
    }
    default:
        return state;
    }
}

export default userData;
