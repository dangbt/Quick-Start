import { call, put, takeLatest } from 'redux-saga/effects';

import * as actions from '../appReducer/userReducer/actions';
import * as constants from '../appReducer/userReducer/constants';

import { userApi } from '../appApi/user';

function* getUserFlow(action) {
  try {
    const response = yield call(userApi.getUser);

    // yield put(actions.addClientRequestSuccess(response));
    // yield put(actions.showAddClient(false));
    // yield put(actions.getClientsRequest());
    // return response;
  } catch (err) {
    // yield put(actions.addClientRequestFailed(err.error));
    // return false;
  }
}

export function* getUserWatcher() {
  yield takeLatest(constants.GET_USER_REQUEST, getUserFlow);
}

export default {
  getUserWatcher,
};
