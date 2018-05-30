const NAMESPACE = 'session/';


export const LOGIN = `${NAMESPACE}LOGIN`;

export function login(accessToken, pageId) {
    return {
        type: LOGIN,
        payload: {
            accessToken,
            pageId,
        },
    };
}


export const LOGIN_SUCCESS = `${NAMESPACE}LOGIN_SUCCESS`;

export function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            token,
        },
    };
}


export const LOGIN_FAILURE = `${NAMESPACE}LOGIN_FAILURE`;

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        payload: {
            error,
        },
    };
}


export const SET_TOKEN = `${NAMESPACE}SET_TOKEN`;

export function setToken(token) {
    return {
        type: SET_TOKEN,
        payload: {
            token
        }
    };
}


export const LOGOUT = `${NAMESPACE}LOGOUT`;

export function logout() {
    return {
        type: LOGOUT,
    };
}
