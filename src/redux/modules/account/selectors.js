function getState(state) {
    return state.account;
}

export function getUsername(state) {
    return getState(state).username;
}

export function getName(state) {
    return getState(state).name;
}

export function getFollowersCount(state) {
    return getState(state).followersCount;
}

export function getFollowsCount(state) {
    return getState(state).followsCount;
}

export function getProfilePictureUrl(state) {
    return getState(state).profilePictureUrl;
}

export function getMedia(state) {
    return getState(state).media;
}

export function getActivity(state) {
    return getState(state).activity;
}

export function isFetchingAccount(state) {
    return getState(state).isFetchingAccount;
}

export function errorFetchingAccount(state) {
    return getState(state).errorFetchingAccount;
}

export function isSyncingAccount(state) {
    return getState(state).isSyncingAccount;
}

export function errorSyncingAccount(state) {
    return getState(state).errorSyncingAccount;
}