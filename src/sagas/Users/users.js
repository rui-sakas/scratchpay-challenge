import { call, put } from 'redux-saga/effects';
import {
    requestUsersInfo,
    deleteUserRequest,
    createUserRequest,
    editUserRequest
} from '../../api/users';
import {
    createUserError,
    createUserSuccess,
    deleteUserSuccess,
    editUserError,
    editUserSuccess,
    fetchUsersError,
    fetchUsersRequest,
    fetchUsersSuccess
} from '../../actions/users';

export function* getUsersInfo({ payload }) {
    try {
        const { page } = payload;
        let users = yield call(requestUsersInfo, page);
        yield put(fetchUsersSuccess(users));
    } catch (error) {
        yield put(fetchUsersError());
    }
}

export function* deleteUser({ payload }) {
    try {
        yield call(deleteUserRequest, payload.userId);
        yield put(fetchUsersRequest(1));
        yield put(
            deleteUserSuccess({
                visible: true,
                message: 'User deleted!',
                error: false
            })
        );
    } catch (error) {
        yield put(
            deleteUserRequest({
                visible: true,
                message: 'Something went wrong!',
                error: true
            })
        );
    }
}

export function* createUser({ payload }) {
    try {
        yield call(createUserRequest, payload.values);
        yield put(fetchUsersRequest(1));
        yield put(
            createUserSuccess({
                visible: true,
                message: 'User created!',
                error: false
            })
        );
    } catch (error) {
        let message = 'Something went wrong!';
        if (error?.response?.data?.errors[0] === 'duplicated email') {
            message = 'Email already exists!';
        }

        yield put(
            createUserError({
                visible: true,
                message,
                error: true
            })
        );
    }
}

export function* editUser({ payload }) {
    try {
        yield call(editUserRequest, payload.values, payload.userId);
        yield put(fetchUsersRequest(1));
        yield put(
            editUserSuccess({
                visible: true,
                message: 'User edited!',
                error: false
            })
        );
    } catch (error) {
        let message = 'Something went wrong!';
        if (error?.response?.data?.errors[0] === 'duplicated email') {
            message = 'Email already exists!';
        }

        yield put(
            editUserError({
                visible: true,
                message,
                error: true
            })
        );
    }
}
