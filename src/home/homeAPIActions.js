import {CURRENT_BALANCE} from '../utils/AppURLS';

import {generateError} from '../utils/AppErrors';

export function apiBalanceRequest(idToken) {
    return new Promise((resolve, reject) => {
        fetch(CURRENT_BALANCE, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        }).then((response) => {
            if (response.status === 401) {
                return reject(generateError(401, 'Unauthorized.'));
            }
            return response.json();
        }).then((json) => {
            if (!json.success) {
                return reject(generateError(json.errorCode, json.errorMessage));
            }
            resolve(json.result);
        });
    });
}
