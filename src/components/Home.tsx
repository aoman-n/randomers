/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import GithubInput from './GithubInput';
import Layout from './Layout';

const Home: FC = () => (
  <Layout>
    <GithubInput />
  </Layout>
);

export default Home;
