// vendor
import { fork } from 'redux-saga/effects';
import { getUserWatcher } from './user';

export default function* root() {
  yield fork(getUserWatcher);
}
