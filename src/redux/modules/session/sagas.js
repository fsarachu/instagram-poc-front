import {all, call, put, takeEvery} from "redux-saga/effects";

import {LOGIN, loginFailure, loginSuccess, LOGOUT} from "./actions";
import {login as loginApi} from "./service";

export function* login(action) {
    try {
        const {accessToken, pageId} = action.payload;
        const {token} = yield call(loginApi, accessToken, pageId);
        yield put(loginSuccess(token));
        yield call(localStorage.setItem.bind(localStorage), 'jwt', token);
    } catch (error) {
        console.error(error);
        yield put(loginFailure("Couldn't log in"));

    }
}

export function* watchLogin() {
    yield takeEvery(LOGIN, login);
}

export function* logout(action) {
    try {
        yield call(localStorage.removeItem.bind(localStorage), 'jwt');
    } catch (error) {
        console.error(error);
    }
}

export function* watchLogout() {
    yield takeEvery(LOGOUT, logout);
}


export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchLogout(),
    ]);
};