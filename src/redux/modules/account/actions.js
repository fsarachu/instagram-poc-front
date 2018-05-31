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
