import { takeLatest } from 'redux-saga/effects';
import { authenticationRequest } from './authentication';
import { AUTHENTICATE_USERS_REQUEST } from '../../constants/action.types';

export default function* () {
    yield takeLatest(AUTHENTICATE_USERS_REQUEST, authenticationRequest);
}
