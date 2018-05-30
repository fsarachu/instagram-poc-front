function getState(state) {
    return state.session;
}

export function getToken(state) {
    return getState(state).token;
}

export function isLoggingIn(state) {
    return getState(state).isLoggingIn;
}

export function loginError(state) {
    return getState(state).loginError;
}

export function isAuthenticated(state) {
    return !!getToken(state);
}