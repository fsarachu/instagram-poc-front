function getState(state) {
    return state.facebook;
}

export function accessToken(state) {
    return getState(state).accessToken;
}

export function userId(state) {
    return getState(state).userId;
}

export function userName(state) {
    return getState(state).userName;
}

export function userPicture(state) {
    return getState(state).userPicture;
}

export function hasAccessToken(state) {
    return !!accessToken(state);
}

export function isFetchingPages(state) {
    return getState(state).isFetchingPages;
}

export function errorFetchingPages(state) {
    return getState(state).errorFetchingPages;
}

export function pages(state) {
    return getState(state).pages;
}

export function selectedPageId(state) {
    return getState(state).selectedPageId;
}

export function isLoggingIn(state) {
    return getState(state).isLoggingIn;
}

export function loginError(state) {
    return getState(state).loginError;
}