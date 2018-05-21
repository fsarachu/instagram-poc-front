import Interceptor from "../Interceptor";
import store from "../../../../redux/store";
import {logout} from "../../../../redux/modules/session/actions";
import {isAuthenticated} from "../../../../redux/modules/session/selectors";

export default new Interceptor(undefined, (error) => {
    const notAuthorized = error.response && error.response.status === 401;
    const wasAuthenticated = isAuthenticated(store.getState());

    if (wasAuthenticated && notAuthorized) {
        store.dispatch(logout());
    }

    return Promise.reject(error);
});