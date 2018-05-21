import {all} from "redux-saga/effects";

import app from "./app/sagas";
import facebook from "./facebook/sagas";

export default function* rootSaga() {
    yield all([
        app(),
        facebook(),
    ]);
};