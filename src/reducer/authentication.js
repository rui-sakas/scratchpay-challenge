import {
    AUTHENTICATE_USERS_REQUEST,
    AUTHENTICATE_USERS_ERROR,
    AUTHENTICATE_USERS_SUCCESS
} from '../constants/action.types';

const initialState = {
    authenticating: false,
    validCredentials: undefined
};

export const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE_USERS_REQUEST:
            return {
                ...state,
                authenticating: true
            };
        case AUTHENTICATE_USERS_SUCCESS:
            return {
                authenticating: false,
                validCredentials: true
            };
        case AUTHENTICATE_USERS_ERROR:
            return {
                authenticating: false,
                validCredentials: false
            };
        default:
            return state;
    }
};
