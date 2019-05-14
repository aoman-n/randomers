/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import Members from 'containers/Organizations/Members';
// import GithubInput from './GithubInput';
// import Form from './Form';
import Form from 'containers/Organizations/Form';
import Layout from '../Layout';
// import pages from '../pages';

const Organizations: FC = () => (
  <Layout>
    <Form />
    <Members />
  </Layout>
);

export default Organizations;
