import { User } from 'services/github/models';
import * as ActionType from './randomConstants';

interface AddMembersParams {
  users: User[];
}

interface RemoveMemberParams {
  userLogin: string;
}

interface ApointUserParams {
  user: User;
}

export const addMembers = (params: AddMembersParams) => ({
  type: ActionType.ADD_MEMBERS as typeof ActionType.ADD_MEMBERS,
  payload: { params },
});

export const removeMember = (params: RemoveMemberParams) => ({
  type: ActionType.REMOVE_MEMBER as typeof ActionType.REMOVE_MEMBER,
  payload: { params },
});

export const start = () => ({
  type: ActionType.START as typeof ActionType.START,
});

export const stop = () => ({
  type: ActionType.STOP as typeof ActionType.STOP,
});

export const apointUser = (params: ApointUserParams) => ({
  type: ActionType.APOINT_USER as typeof ActionType.APOINT_USER,
  payload: params,
});

export type RandomAction =
  | ReturnType<typeof addMembers>
  | ReturnType<typeof removeMember>
  | ReturnType<typeof start>
  | ReturnType<typeof stop>
  | ReturnType<typeof apointUser>;
