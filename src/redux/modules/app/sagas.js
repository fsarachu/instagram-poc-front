import {all, call, put, takeEvery} from "redux-saga/effects";

import {LOAD_APP, loadAppFailure, loadAppSuccess} from "./actions";
import {setToken} from "../session/actions";

function loadFacebookSDK() {
    return new Promise((resolve, reject) => {
        try {
            const d = window.document;
            const s = 'script';
            const id = 'facebook-jssdk';

            if (!d.getElementById(id)) {
                const fjs = d.getElementsByTagName(s)[0];
                const js = d.createElement(s);
                js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                js.onload = resolve;
                js.onerror = reject;
                fjs.parentNode.insertBefore(js, fjs);
            } else {
                console.log('Facebook SDK script already injected');
                resolve();
            }
        } catch (e) {
            reject(e);
        }

    });
}

function initFacebookSDK() {
    window.FB.init({
        appId: '463375200785413',
        status: false,
        cookie: false,
        xfbml: false,
        version: 'v2.12'
    });
}

export function* loadApp() {
    try {
        const token = yield call(localStorage.getItem.bind(localStorage), 'jwt');
        yield put(setToken(token));
        yield call(loadFacebookSDK);
        yield call(initFacebookSDK);
        yield put(loadAppSuccess());
    } catch (error) {
        console.error(error);
        yield put(loadAppFailure('Error loading app'));
    }
}

export function* watchLoadApp() {
    yield takeEvery(LOAD_APP, loadApp);
}

export default function* rootSaga() {
    yield all([
        watchLoadApp(),
    ]);
};