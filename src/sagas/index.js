import { fork } from 'redux-saga/effects';
import users from './Users';
import authentication from './Authentication';

export default function* rootSaga() {
    yield fork(users);
    yield fork(authentication);
}
