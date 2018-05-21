function getState(state) {
    return state.app;
}


export function isLoading(state) {
    return getState(state).isLoading;
}


export function errorLoading(state) {
    return getState(state).errorLoading;
}
