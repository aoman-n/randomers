/** @jsx jsx */
import { FC, Dispatch, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';
import { Input, Button, Icon } from 'semantic-ui-react';

import { User } from '../../reducers/github';

export interface SearchUserFormProps {
  addedUsers: User[];
  searchedUsers: User[];
  isLoading: boolean;
  searchQuery: string;
  setSearchQuery: Dispatch<React.SetStateAction<string>>;
  handleSubmit: any;
  dispatchRemoveMember: (params: any) => void;
}

const form = css`
  margin-bottom: 40px;
`;

const input = css`
  margin-right: 16px !important;
`;

const Form: FC<SearchUserFormProps> = ({
  addedUsers,
  searchedUsers,
  isLoading,
  searchQuery,
  setSearchQuery,
  handleSubmit,
  dispatchRemoveMember,
}) => {
  return (
    <form css={form} onSubmit={handleSubmit}>
      <Input
        css={input}
        placeholder="Search..."
        value={searchQuery}
        list="users"
        onChange={(e, data) => setSearchQuery(String(data.value))}
      />
      <datalist id="users">
        {searchedUsers.map(user => (
          <option key={user.id} value={user.login} />
        ))}
      </datalist>
      <Button
        type="submit"
        primary
        disabled={
          !searchQuery.length ||
          isLoading ||
          !searchedUsers.some(u => u.login === searchQuery)
        }
        loading={isLoading}
      >
        追加
      </Button>
    </form>
  );
};

export default Form;
