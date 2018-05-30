import {combineReducers} from "redux";

import account from "./account";
import app from "./app";
import facebook from "./facebook";
import session from "./session";

export default combineReducers({
    account,
    app,
    facebook,
    session,
});