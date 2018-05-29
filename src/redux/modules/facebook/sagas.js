import {all, call, put, takeEvery} from "redux-saga/effects";

import {FB_LOGIN, fbLoginFailure, fbLoginSuccess} from "./actions";
import * as service from './service';

export function* fbLogin() {
    try {
        const accessToken = yield call(service.login);
        const profile = yield call(service.getUser);
        yield put(fbLoginSuccess(accessToken, profile.id, profile.name, profile.picture.data.url));
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