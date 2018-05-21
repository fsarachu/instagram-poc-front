import {combineReducers} from "redux";

import app from "./app";
import facebook from "./facebook";
import session from "./session";

export default combineReducers({
    app,
    facebook,
    session,
});