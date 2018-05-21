import {LOAD_APP, LOAD_APP_SUCCESS, LOAD_APP_FAILURE} from "./actions";

const initialState = {
    isLoading: true,
    errorLoading: null,
};

export default function (state = initialState, action) {

    const {payload, type} = action;

    switch (type) {

        case LOAD_APP: {
            return {
                ...state,
                isLoading: true,
                errorLoading: null,
            };
        }

        case LOAD_APP_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                errorLoading: null,
            };
        }

        case LOAD_APP_FAILURE: {
            return {
                ...state,
                isLoading: false,
                errorLoading: payload.error,
            };
        }

        default: {
            return state;
        }
    }
}