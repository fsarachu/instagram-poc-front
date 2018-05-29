import {all, call, put, takeEvery} from "redux-saga/effects";

import {FB_LOGIN, fbLoginFailure, fbLoginSuccess, GET_PAGES, getPagesSuccess, getPagesFailure} from "./actions";
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


export function* getPages() {
    try {
        const pages = yield call(service.getPages);
        yield put(getPagesSuccess(pages));
    } catch (error) {
        console.error(error);
        yield put(getPagesFailure("Couldn't get user pages"));

    }
}

export function* watchGetPages() {
    yield takeEvery(GET_PAGES, getPages);
}


export default function* rootSaga() {
    yield all([
        watchFbLogin(),
        watchGetPages(),
    ]);
};