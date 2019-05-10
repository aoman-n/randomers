import { combineReducers } from 'redux';
import testReducer from './github';

export default combineReducers({
  test: testReducer,
});
