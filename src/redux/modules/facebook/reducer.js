import {FB_LOGIN, FB_LOGIN_FAILURE, FB_LOGIN_SUCCESS, GET_PAGES, GET_PAGES_SUCCESS, GET_PAGES_FAILURE} from "./actions";

const initialState = {
    accessToken: null,
    userName: null,
    userId: null,
    userPicture: null,
    pages: [],
    selectedPageId: null,
    isFetchingPages: false,
    errorFetchingPages: null,
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

        case GET_PAGES: {
            return {
                ...state,
                isFetchingPages: true,
                errorFetchingPages: null,
            };
        }

        case GET_PAGES_SUCCESS: {
            return {
                ...state,
                pages: payload.pages,
                isFetchingPages: false,
                errorFetchingPages: null,
            };
        }

        case GET_PAGES_FAILURE: {
            return {
                ...state,
                isFetchingPages: false,
                errorFetchingPages: payload.error,
            };
        }

        default: {
            return state;
        }
    }
}