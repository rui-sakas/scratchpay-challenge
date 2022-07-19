import {
    CREATE_USER_ERROR,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    DELETE_USER_ERROR,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    EDIT_USER_ERROR,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    FETCH_USERS_ERROR,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    CLEAR_TOAST_MESSAGE
} from '../constants/action.types';

export const fetchUsersRequest = (page) => {
    return {
        type: FETCH_USERS_REQUEST,
        payload: { page }
    };
};

export const fetchUsersSuccess = (payload) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload
    };
};

export const fetchUsersError = () => {
    return {
        type: FETCH_USERS_ERROR
    };
};

export const deleteUserRequest = (userId) => {
    return {
        type: DELETE_USER_REQUEST,
        payload: { userId }
    };
};

export const deleteUserSuccess = (payload) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload
    };
};

export const deleteUserError = (payload) => {
    return {
        type: DELETE_USER_ERROR,
        payload
    };
};

export const createUserRequest = (values) => {
    return {
        type: CREATE_USER_REQUEST,
        payload: { values }
    };
};

export const createUserSuccess = (payload) => {
    return {
        type: CREATE_USER_SUCCESS,
        payload
    };
};

export const createUserError = (payload) => {
    return {
        type: CREATE_USER_ERROR,
        payload
    };
};

export const editUserRequest = (values, userId) => {
    return {
        type: EDIT_USER_REQUEST,
        payload: { values, userId }
    };
};

export const editUserSuccess = (payload) => {
    return {
        type: EDIT_USER_SUCCESS,
        payload
    };
};

export const editUserError = (payload) => {
    return {
        type: EDIT_USER_ERROR,
        payload
    };
};

export const clearToastMessage = () => {
    return {
        type: CLEAR_TOAST_MESSAGE
    };
};
