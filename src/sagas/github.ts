import { fork, take } from 'redux-saga/effects';

function* runTestSaga() {
  console.log('saga running!');
  yield take('testActionType');
}

export default function* rootSaga() {
  yield fork(runTestSaga);
}
