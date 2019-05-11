import { fork, take } from 'redux-saga/effects';
// import { getMembers, GithubActoion } from '../actions/github';
// import getMembersFactory from '../services/github/api';

function* runTestSaga() {
  console.log('saga running!');
  yield take('testActionType');
}

export default function* rootSaga() {
  yield fork(runTestSaga);
}
