import {
    RECEIVE_CURRENT_BALANCE,
    RETRIEVE_CURRENT_BALANCE,
} from './homeActionTypes';

import {CURRENT_BALANCE} from '../utils/AppURLS';

// TODO Error handling

function receiveCurrentBalance(newData) {
    return {
        type: RECEIVE_CURRENT_BALANCE,
        fetching: false,
        data: {
            currentBalance: newData.currentBalance,
        },
    };
}

function retrieveCurrentBalance() {
    return {
        type: RETRIEVE_CURRENT_BALANCE,
        fetching: true,
    };
}

export function getCurrentBalance() {
    return function(dispatch) {
        dispatch(retrieveCurrentBalance());
        fetch(CURRENT_BALANCE, {
            mode: 'cors',
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        }).then((response) => response.json())
        .then((responseJson) => {
            dispatch(receiveCurrentBalance(responseJson));
        });
    };
}