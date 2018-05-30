import {all} from "redux-saga/effects";

import account from "./account/sagas";
import app from "./app/sagas";
import facebook from "./facebook/sagas";
import session from "./session/sagas";

export default function* rootSaga() {
    yield all([
        account(),
        app(),
        facebook(),
        session(),
    ]);
};