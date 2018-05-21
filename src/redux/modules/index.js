import {combineReducers} from "redux";

import app from "./app";
import facebook from "./facebook";

export default combineReducers({
    app,
    facebook,
});