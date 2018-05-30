const NAMESPACE = 'facebook/';


export const FB_LOGIN = `${NAMESPACE}FB_LOGIN`;

export function fbLogin() {
    return {
        type: FB_LOGIN,
        payload: {},
    };
}


export const FB_LOGIN_SUCCESS = `${NAMESPACE}FB_LOGIN_SUCCESS`;

export function fbLoginSuccess(accessToken, userId, userName, userPicture) {
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


export const GET_PAGES = `${NAMESPACE}GET_PAGES`;

export function getPages() {
    return {
        type: GET_PAGES,
        payload: {},
    };
}


export const GET_PAGES_SUCCESS = `${NAMESPACE}GET_PAGES_SUCCESS`;

export function getPagesSuccess(pages) {
    return {
        type: GET_PAGES_SUCCESS,
        payload: {
            pages
        },
    };
}


export const GET_PAGES_FAILURE = `${NAMESPACE}GET_PAGES_FAILURE`;

export function getPagesFailure(error) {
    return {
        type: GET_PAGES_FAILURE,
        payload: {
            error,
        },
    };
}

export const SELECT_PAGE = `${NAMESPACE}SELECT_PAGE`;

export function selectPage(pageId) {
    return {
        type: SELECT_PAGE,
        payload: {
            pageId,
        },
    };
}