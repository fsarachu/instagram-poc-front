import {GET_ACCOUNT, GET_ACCOUNT_FAILURE, GET_ACCOUNT_SUCCESS, SYNC_ACCOUNT, SYNC_ACCOUNT_FAILURE, SYNC_ACCOUNT_SUCCESS} from "./actions";

const initialState = {
    username: null,
    name: null,
    followersCount: 0,
    followsCount: 0,
    profilePictureUrl: null,
    media: [],
    activity: [],
    isFetchingAccount: false,
    errorFetchingAccount: null,
    isSyncingAccount: false,
    errorSyncingAccount: null,
};

export default function (state = initialState, action) {

    const {payload, type} = action;

    switch (type) {

        case GET_ACCOUNT: {
            return {
                ...state,
                isFetchingAccount: true,
                errorFetchingAccount: null,
            };
        }

        case GET_ACCOUNT_SUCCESS: {

            const {
                username,
                name,
                followersCount,
                followsCount,
                profilePictureUrl,
                media,
                activity
            } = payload;

            return {
                ...state,
                username,
                name,
                followersCount,
                followsCount,
                profilePictureUrl,
                media,
                activity,
                isFetchingAccount: false,
                errorFetchingAccount: null,
            };
        }

        case GET_ACCOUNT_FAILURE: {
            return {
                ...state,
                isFetchingAccount: false,
                errorFetchingAccount: payload.error,
            };
        }

        case SYNC_ACCOUNT: {
            return {
                ...state,
                isSyncingAccount: true,
                errorSyncingAccount: null,
            };
        }

        case SYNC_ACCOUNT_SUCCESS: {

            const {
                username,
                name,
                followersCount,
                followsCount,
                profilePictureUrl,
                media,
                activity
            } = payload;

            return {
                ...state,
                username,
                name,
                followersCount,
                followsCount,
                profilePictureUrl,
                media,
                activity,
                isSyncingAccount: false,
                errorSyncingAccount: null,
            };
        }

        case SYNC_ACCOUNT_FAILURE: {
            return {
                ...state,
                isSyncingAccount: false,
                errorSyncingAccount: payload.error,
            };
        }

        default: {
            return state;
        }
    }
}