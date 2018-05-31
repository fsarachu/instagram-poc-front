import {all, call, put, takeEvery} from "redux-saga/effects";

import {
    GET_ACCOUNT,
    getAccountFailure,
    getAccountSuccess,
    SYNC_ACCOUNT,
    syncAccountFailure,
    syncAccountSuccess
} from "./actions";
import * as service from "./service";

export function* getAccount(action) {
    try {
        const {username, name, followersCount, followsCount, profilePictureUrl, media, activity} = yield call(service.getAccount);
        yield put(getAccountSuccess(username, name, followersCount, followsCount, profilePictureUrl, media, activity));
    } catch (error) {
        console.error(error);
        yield put(getAccountFailure("Couldn't get account"));

    }
}

export function* watchGetAccount() {
    yield takeEvery(GET_ACCOUNT, getAccount);
}

export function* syncAccount(action) {
    try {
        const {username, name, followersCount, followsCount, profilePictureUrl, media, activity} = yield call(service.syncAccount);
        yield put(syncAccountSuccess(username, name, followersCount, followsCount, profilePictureUrl, media, activity));
    } catch (error) {
        console.error(error);
        yield put(syncAccountFailure("Couldn't sync account"));

    }
}

export function* watchSyncAccount() {
    yield takeEvery(SYNC_ACCOUNT, syncAccount);
}


export default function* rootSaga() {
    yield all([
        watchGetAccount(),
        watchSyncAccount(),
    ]);
};