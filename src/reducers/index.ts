import { combineReducers } from 'redux';
import github, { GithubState } from './github';

export interface RootStateType {
  github: GithubState;
}

export default combineReducers({
  github,
});
