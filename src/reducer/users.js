import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    DELETE_USER_SUCCESS,
    CLEAR_TOAST_MESSAGE,
    CREATE_USER_SUCCESS,
    EDIT_USER_SUCCESS,
    CREATE_USER_ERROR,
    EDIT_USER_ERROR
} from '../constants/action.types';

const initialState = {
    users: [],
    page: 1,
    perPage: 10,
    totalUsers: null,
    errorFetching: undefined,
    fetching: false,
    toastMessage: { visible: false, message: null, error: null }
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                fetching: true
            };

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                fetching: false,
                page: parseInt(action.payload.page),
                per_page: action.payload.per_page,
                totalUsers: action.payload.totalUsers
            };

        case FETCH_USERS_ERROR:
            return {
                ...state,
                fetching: false,
                errorFetching: true
            };

        case CREATE_USER_SUCCESS:
        case DELETE_USER_SUCCESS:
        case EDIT_USER_SUCCESS:
        case CREATE_USER_ERROR:
        case EDIT_USER_ERROR:
            return {
                ...state,
                toastMessage: action.payload
            };

        case CLEAR_TOAST_MESSAGE:
            return {
                ...state,
                toastMessage: { visible: false, message: null, error: null }
            };

        default:
            return state;
    }
};
