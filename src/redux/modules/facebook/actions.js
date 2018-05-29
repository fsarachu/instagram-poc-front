const NAMESPACE = 'facebook/';


export const FB_LOGIN = `${NAMESPACE}FB_LOGIN`;

export function fbLogin() {
    return {
        type: FB_LOGIN,
        payload: {},
    };
}


export const FB_LOGIN_SUCCESS = `${NAMESPACE}FB_LOGIN_SUCCESS`;

export function fbLoginSuccess(accessToken, userName, userId, userPicture) {
    return {
        type: FB_LOGIN_SUCCESS,
        payload: {
            accessToken,
            userName,
            userId,
            userPicture,
        },
    };
}


export const FB_LOGIN_FAILURE = `${NAMESPACE}FB_LOGIN_FAILURE`;

export function fbLoginFailure(error) {
    return {
        type: FB_LOGIN_FAILURE,
        payload: {
            error,
        },
    };
}