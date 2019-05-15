import { Reducer } from 'redux';
// import { User } from 'services/github/models';
import * as ActionType from 'actions/randomConstants';
import { RandomAction } from 'actions/random';
import { User } from './github';

export interface RandomState {
  users: User[];
  isActive: boolean;
  apointUser: User | null;
}

const initialState: RandomState = {
  users: [],
  isActive: false,
  apointUser: null,
};

const randomReducer: Reducer<RandomState, RandomAction> = (
  state: RandomState = initialState,
  action: RandomAction,
) => {
  switch (action.type) {
    case ActionType.ADD_MEMBERS:
      return {
        ...state,
        users: action.payload.params.users,
      };
    case ActionType.ADD_MEMBER:
      return {
        ...state,
        users: [...state.users, action.payload.params.user],
      };
    case ActionType.REMOVE_MEMBER:
      return {
        ...state,
        users: state.users.filter(
          user => user.login !== action.payload.params.userLogin,
        ),
      };
    case ActionType.START:
      return {
        ...state,
        isActive: true,
        apointUser: null,
      };
    case ActionType.STOP:
      return {
        ...state,
        isActive: false,
        apointUser: action.payload.params.user,
      };
    case ActionType.APOINT_USER:
      return {
        ...state,
        apointUser: action.payload.user,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default randomReducer;
