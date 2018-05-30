import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SET_TOKEN} from "./actions";

const initialState = {
    token: null,
    isLoggingIn: false,
    loginError: null,
};

export default function (state = initialState, action) {

    const {payload, type} = action;

    switch (type) {

        case LOGIN: {
            return {
                ...state,
                isLoggingIn: true,
                loginError: null,
            };
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                token: payload.token,
                isLoggingIn: false,
                loginError: null,
            };
        }

        case LOGIN_FAILURE: {
            return {
                ...state,
                isLoggingIn: false,
                loginError: payload.error,
            };
        }

        case SET_TOKEN: {
            return {
                ...state,
                token: payload.token,
            };
        }

        case LOGOUT: {
            return {
                ...state,
                token: null,
            };
        }

        default: {
            return state;
        }
    }
}