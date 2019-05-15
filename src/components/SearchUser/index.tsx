/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import Form from '../../containers/SearchUser/Form';
// import Form from './Form';
import Layout from '../Layout';

const SearchUser: FC = () => (
  <Layout>
    <h4>user検索</h4>
    <Form />
    {/* <Members /> */}
  </Layout>
);

export default SearchUser;
