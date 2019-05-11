import { AxiosError } from 'axios';

import * as ActionType from './githubConstants';
import { User } from '../services/github/models';

interface GetMembersParams {
  organizationName: string;
}

interface GetMembersResult {
  users: User[];
}

export const getMembers = {
  start: (params: GetMembersParams) => ({
    type: ActionType.GET_MEMBERS_START as typeof ActionType.GET_MEMBERS_START,
    payload: { params },
  }),
  succeed: (params: GetMembersParams, result: GetMembersResult) => ({
    type: ActionType.GET_MEMBERS_SUCCEED as typeof ActionType.GET_MEMBERS_SUCCEED,
    payload: { params, result },
  }),
  fail: (params: GetMembersParams, error: AxiosError) => ({
    type: ActionType.GET_MEMBERS_FAIL as typeof ActionType.GET_MEMBERS_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type GithubActoion =
  | ReturnType<typeof getMembers.start>
  | ReturnType<typeof getMembers.succeed>
  | ReturnType<typeof getMembers.fail>;
