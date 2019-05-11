import { AxiosError } from 'axios';
import { Reducer } from 'redux';
import { User } from '../services/github/models';
import * as ActionType from '../actions/githubConstants';
import { GithubActoion } from '../actions/github';

interface GithubState {
  organizationName: string;
  users: User[];
  isLoading: boolean;
  error?: AxiosError | null;
}

const initialState: GithubState = {
  organizationName: '',
  users: [],
  isLoading: false,
};

const githubReducer: Reducer<GithubState, GithubActoion> = (
  state: GithubState = initialState,
  action: GithubActoion,
) => {
  switch (action.type) {
    case ActionType.GET_MEMBER_START:
      return {
        ...state,
        isLoading: true,
        organizationName: action.payload.params.organizationName,
      };
    case ActionType.GET_MEMBER_SUCCEED:
      return {
        ...state,
        users: action.payload.result.users,
        isLoading: false,
      };
    case ActionType.GET_MEMBER_FAIL:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default githubReducer;
