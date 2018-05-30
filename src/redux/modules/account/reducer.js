import {GET_ACCOUNT, GET_ACCOUNT_FAILURE, GET_ACCOUNT_SUCCESS} from "./actions";

const initialState = {
    username: null,
    name: null,
    followersCount: 0,
    followsCount: 0,
    profilePictureUrl: null,
    media: [],
    isFetchingAccount: false,
    errorFetchingAccount: null,
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
                media
            } = payload;

            return {
                ...state,
                username,
                name,
                followersCount,
                followsCount,
                profilePictureUrl,
                media,
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

        default: {
            return state;
        }
    }
}