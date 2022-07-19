import { takeLatest } from 'redux-saga/effects';
import { getUsersInfo, deleteUser, createUser, editUser } from './users';
import {
    CREATE_USER_REQUEST,
    DELETE_USER_REQUEST,
    EDIT_USER_REQUEST,
    FETCH_USERS_REQUEST
} from '../../constants/action.types';

export default function* () {
    yield takeLatest(FETCH_USERS_REQUEST, getUsersInfo);
    yield takeLatest(DELETE_USER_REQUEST, deleteUser);
    yield takeLatest(CREATE_USER_REQUEST, createUser);
    yield takeLatest(EDIT_USER_REQUEST, editUser);
}
