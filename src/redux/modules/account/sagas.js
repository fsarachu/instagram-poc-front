import {all, call, put, takeEvery} from "redux-saga/effects";

import {GET_ACCOUNT, getAccountFailure, getAccountSuccess} from "./actions";
import {getAccount as getAccountApi} from "./service";

export function* getAccount(action) {
    try {
        const {username, name, followersCount, followsCount, profilePictureUrl, media} = yield call(getAccountApi);
        yield put(getAccountSuccess(username, name, followersCount, followsCount, profilePictureUrl, media));
    } catch (error) {
        console.error(error);
        yield put(getAccountFailure("Couldn't get account"));

    }
}

export function* watchGetAccount() {
    yield takeEvery(GET_ACCOUNT, getAccount);
}


export default function* rootSaga() {
    yield all([
        watchGetAccount(),
    ]);
};