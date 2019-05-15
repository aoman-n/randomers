/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import Form from '../../containers/SearchUser/Form';
import RandomUsers from '../../containers/common/RandomUsers';
import Layout from '../Layout';

const form = css`
  margin-bottom: 30px;
`;

const SearchUser: FC = () => (
  <Layout>
    <h4>user検索</h4>
    <Form css={form} />
    <RandomUsers />
  </Layout>
);

export default SearchUser;
