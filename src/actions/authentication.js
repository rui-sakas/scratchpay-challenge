import {
    AUTHENTICATE_USERS_ERROR,
    AUTHENTICATE_USERS_REQUEST,
    AUTHENTICATE_USERS_SUCCESS
} from '../constants/action.types';

export const authenticateUserRequest = (payload) => {
    return {
        type: AUTHENTICATE_USERS_REQUEST,
        payload
    };
};

export const authenticateUserSuccess = (payload) => {
    return {
        type: AUTHENTICATE_USERS_SUCCESS,
        payload
    };
};

export const authenticateUserError = () => {
    return {
        type: AUTHENTICATE_USERS_ERROR
    };
};
