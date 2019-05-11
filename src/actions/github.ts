import { AxiosError } from 'axios';

import * as ActionType from './githubConstants';
import { User } from '../services/github/models';

interface GetMemberParams {
  organizationName: string;
}

interface GetMemberResult {
  users: User[];
}

export const getMember = {
  start: (params: GetMemberParams) => ({
    type: ActionType.GET_MEMBER_START as typeof ActionType.GET_MEMBER_START,
    payload: { params },
  }),
  succeed: (params: GetMemberParams, result: GetMemberResult) => ({
    type: ActionType.GET_MEMBER_SUCCEED as typeof ActionType.GET_MEMBER_SUCCEED,
    payload: { params, result },
  }),
  fail: (params: GetMemberParams, error: AxiosError) => ({
    type: ActionType.GET_MEMBER_FAIL as typeof ActionType.GET_MEMBER_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type GithubActoion =
  | ReturnType<typeof getMember.start>
  | ReturnType<typeof getMember.succeed>
  | ReturnType<typeof getMember.fail>;
