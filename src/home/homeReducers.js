import {
    RECEIVE_CURRENT_BALANCE,
    RETRIEVE_CURRENT_BALANCE,
} from './homeActionTypes';

function currentBalance(state = {
    currentBalance: 0,
    fetched: false,
}, action) {
    switch (action.type) {
    case RECEIVE_CURRENT_BALANCE:
        return Object.assign({}, state, {
            fetched: true,
            currentBalance: action.data.currentBalance,
        });
    case RETRIEVE_CURRENT_BALANCE:
        return Object.assign({}, state, {
            fetched: false,
            currentBalance: 0,
        });
    default:
        return state;
    }
}

export default currentBalance;
