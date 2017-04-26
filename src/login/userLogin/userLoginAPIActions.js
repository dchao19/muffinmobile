import {AsyncStorage} from 'react-native';

import {AUTH_STATUS} from '../../utils/AppURLS';
import {generateError} from '../../utils/AppErrors';

export function authStatusRequest(idToken) {
    return new Promise((resolve, reject) => {
        if (!idToken || typeof idToken === 'undefined') {
            return reject(generateError(-1, 'No token provided'));
        }

        fetch(AUTH_STATUS, {
            mode: 'cors',
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
        .then((response) => {
            if (response.status === 401) {
                return reject(generateError(401, 'Unauthorized'));
            }
            return response.json();
        })
        .then((body) => {
            return resolve(body.result.authenticated);
        })
        .catch((error) => {
            return reject(generateError(500, 'Internal Server Error'));
        });
    });
}

export function retrieveIdToken() {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('@Muffin:idToken')
        .then((token) => {
            resolve(token);
        })
        .catch((error) => {
            return reject(generateError(-1, 'No token provided.'));
        });
    });
}
