/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
// import { Link } from 'react-router-dom';

import { User } from '../services/github/models';

export interface MembersProps {
  organizationName: string;
  users: User[];
  isLoading?: boolean;
}

const Members: FC<MembersProps> = ({
  organizationName = '<会社名>',
  users = [],
  isLoading = false,
}) => (
  <div>
    <h3>{organizationName}のMembers:</h3>
    {isLoading ? (
      <div>isLoading...</div>
    ) : (
      <div>
        {users.map((user: User) => (
          <p>{user.login}</p>
        ))}
      </div>
    )}
  </div>
);

export default Members;
