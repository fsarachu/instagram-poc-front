const NAMESPACE = 'account/';


export const GET_ACCOUNT = `${NAMESPACE}GET_ACCOUNT`;

export function getAccount() {
    return {
        type: GET_ACCOUNT,
        payload: {},
    };
}


export const GET_ACCOUNT_SUCCESS = `${NAMESPACE}GET_ACCOUNT_SUCCESS`;

export function getAccountSuccess(username, name, followersCount, followsCount, profilePictureUrl, media, activity) {
    return {
        type: GET_ACCOUNT_SUCCESS,
        payload: {
            username, name, followersCount, followsCount, profilePictureUrl, media, activity
        },
    };
}


export const GET_ACCOUNT_FAILURE = `${NAMESPACE}GET_ACCOUNT_FAILURE`;

export function getAccountFailure(error) {
    return {
        type: GET_ACCOUNT_FAILURE,
        payload: {
            error,
        },
    };
}


export const SYNC_ACCOUNT = `${NAMESPACE}SYNC_ACCOUNT`;

export function syncAccount() {
    return {
        type: SYNC_ACCOUNT,
        payload: {},
    };
}


export const SYNC_ACCOUNT_SUCCESS = `${NAMESPACE}SYNC_ACCOUNT_SUCCESS`;

export function syncAccountSuccess(username, name, followersCount, followsCount, profilePictureUrl, media, activity) {
    return {
        type: SYNC_ACCOUNT_SUCCESS,
        payload: {
            username, name, followersCount, followsCount, profilePictureUrl, media, activity
        },
    };
}


export const SYNC_ACCOUNT_FAILURE = `${NAMESPACE}SYNC_ACCOUNT_FAILURE`;

export function syncAccountFailure(error) {
    return {
        type: SYNC_ACCOUNT_FAILURE,
        payload: {
            error,
        },
    };
}
