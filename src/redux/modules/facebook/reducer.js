import {FB_LOGIN, FB_LOGIN_FAILURE, FB_LOGIN_SUCCESS} from "./actions";

const initialState = {
    accessToken: null,
    userName: null,
    userId: null,
    userPicture: null,
    isLoggingIn: false,
    loginError: null,
};

export default function (state = initialState, action) {

    const {payload, type} = action;

    switch (type) {

        case FB_LOGIN: {
            return {
                ...state,
                isLoggingIn: true,
                loginError: null,
            };
        }

        case FB_LOGIN_SUCCESS: {
            return {
                ...state,
                accessToken: payload.accessToken,
                userName: payload.userName,
                userId: payload.userId,
                userPicture: payload.userPicture,
                isLoggingIn: false,
                loginError: null,
            };
        }

        case FB_LOGIN_FAILURE: {
            return {
                ...state,
                isLoggingIn: false,
                loginError: payload.error,
            };
        }

        default: {
            return state;
        }
    }
}