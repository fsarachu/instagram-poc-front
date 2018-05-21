function getState(state) {
    return state.facebook;
}

export function accessToken(state) {
    return getState(state).accessToken;
}

export function hasAccessToken(state) {
    return !!accessToken(state);
}

export function isLoggingIn(state) {
    return getState(state).isLoggingIn;
}

export function loginError(state) {
    return getState(state).loginError;
}