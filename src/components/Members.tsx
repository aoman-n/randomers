/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
// import { Link } from 'react-router-dom';

import { User } from '../services/github/models';

interface MembersProps {
  users?: User[];
  isLoading?: boolean;
}

const Members: FC<MembersProps> = () => (
  <div>
    <h3>Members:</h3>
  </div>
);

export default Members;
