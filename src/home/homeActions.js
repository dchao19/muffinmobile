import {
    RECEIVE_CURRENT_BALANCE,
    RETRIEVE_CURRENT_BALANCE,
    GET_CURRENT_BALANCE,
    ERROR_CURRENT_BALANCE,
} from './homeActionTypes';

// TODO Error handling

export function receiveCurrentBalance(newData) {
    return {
        type: RECEIVE_CURRENT_BALANCE,
        fetched: true,
        data: {
            currentBalance: newData.currentBalance,
        },
    };
}

export function retrieveCurrentBalance() {
    return {
        type: RETRIEVE_CURRENT_BALANCE,
        fetched: false,
    };
}

export function errorCurrentBalance(err) {
    let {errMessage, errCode} = err;
    return {
        type: ERROR_CURRENT_BALANCE,
        fetched: true,
        errMessage,
        errCode,
    };
}

export function getCurrentBalance() {
    return {
        type: GET_CURRENT_BALANCE,
    };
}
