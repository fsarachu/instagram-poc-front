import {all, call, put, takeEvery} from "redux-saga/effects";

import {FB_LOGIN, fbLoginFailure, fbLoginSuccess} from "./actions";
import {login} from './service';

export function* fbLogin(action) {
    try {
        const accessToken = yield call(login);
        yield put(fbLoginSuccess(accessToken));
    } catch (error) {
        console.error(error);
        yield put(fbLoginFailure("Couldn't login to Facebook"));

    }
}

export function* watchFbLogin() {
    yield takeEvery(FB_LOGIN, fbLogin);
}


export default function* rootSaga() {
    yield all([
        watchFbLogin(),
    ]);
};