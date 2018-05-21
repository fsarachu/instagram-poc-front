const NAMESPACE = 'app/';


export const LOAD_APP = `${NAMESPACE}LOAD_APP`;

export function loadApp() {
    return {
        type: LOAD_APP,
    };
}


export const LOAD_APP_SUCCESS = `${NAMESPACE}LOAD_APP_SUCCESS`;

export function loadAppSuccess() {
    return {
        type: LOAD_APP_SUCCESS,
    };
}


export const LOAD_APP_FAILURE = `${NAMESPACE}LOAD_APP_FAILURE`;

export function loadAppFailure(error) {
    return {
        type: LOAD_APP_FAILURE,
        payload: {
            error,
        },
    };
}