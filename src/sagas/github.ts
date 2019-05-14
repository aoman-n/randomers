import { fork, put, all, call, takeLatest } from 'redux-saga/effects';
import * as Actions from '../actions/githubConstants';
import { getMembers } from '../actions/github';
import { getMembersFactory } from '../services/github/api';

function* runGetMembers(action: ReturnType<typeof getMembers.start>) {
  const { organizationName } = action.payload.params;
  const api = getMembersFactory();

  try {
    const users = yield call(api, organizationName);
    yield put(getMembers.succeed({ organizationName }, { users }));
  } catch (error) {
    yield put(getMembers.fail({ organizationName }, error));
  }
}

function* getMembersStartWatcher() {
  yield takeLatest(Actions.GET_MEMBERS_START, runGetMembers);
}

export default function* rootSaga() {
  yield all([fork(getMembersStartWatcher)]);
}
