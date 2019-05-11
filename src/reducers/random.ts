import { Reducer } from 'redux';
import { User } from 'services/github/models';
import * as ActionType from 'actions/randomConstants';
import { RandomAction } from 'actions/random';

export interface RandomState {
  users: User[];
  isActive: boolean;
  apointUser?: User;
}

const initialState: RandomState = {
  users: [],
  isActive: false,
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
    case ActionType.START:
      return {
        ...state,
        isActive: true,
      };
    case ActionType.STOP:
      return {
        ...state,
        isActive: false,
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
