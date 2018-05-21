import Interceptor from "../Interceptor";
import store from "../../../../redux/store";
import {getToken} from "../../../../redux/modules/session/selectors";

export default new Interceptor((config) => {

    const state = store.getState();
    const token = getToken(state);

    if (!token) {
        return config;
    }

    return {
        ...config,
        headers: {
            Authorization: `Bearer ${token}`,
            ...config.headers,
        },
    };

});