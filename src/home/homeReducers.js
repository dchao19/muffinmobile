import {
    RECEIVE_CURRENT_BALANCE,
    RETRIEVE_CURRENT_BALANCE,
} from './homeActionTypes';

function currentBalance(state = {
    currentBalance: 0.0,
    fetching: false,
}, action) {
    switch (action.type) {
    case RECEIVE_CURRENT_BALANCE: {
        return Object.assign({}, state, {
            fetching: false,
            currentBalance: action.data.currentBalance,
        });
    }
    case RETRIEVE_CURRENT_BALANCE: {
        return Object.assign({}, state, {
            fetching: true,
            currentBalance: 0.0,
        });
    }
    default: {
        return Object.assign({}, state, {
            fetching: false,
            currentBalance: 0.0,
        });
    }
    }
}

export default currentBalance;
