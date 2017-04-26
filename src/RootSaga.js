import * as userLoginSagas from './login/userLogin/userLoginSagas';
import * as homeSagas from './home/homeSagas';

export default function* rootSaga() {
    yield [
        userLoginSagas.watchGetAuthStatus(),
        userLoginSagas.watchReceiveIdToken(),
        userLoginSagas.watchRequestIdToken(),
        homeSagas.watchGetCurrentBalance(),
    ];
};

