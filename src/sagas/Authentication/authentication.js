import { put, delay } from 'redux-saga/effects';
import {
    authenticateUserError,
    authenticateUserSuccess
} from '../../actions/authentication';

export function* authenticationRequest({ payload }) {
    try {
        const { username, password } = payload;
        yield delay(1500);

        if (username === 'demo@scrathpay.com' && password === 'scrathpay123') {
            yield put(authenticateUserSuccess());
        } else {
            yield put(authenticateUserError());
        }
    } catch (error) {
        yield put(authenticateUserError());
    }
}
