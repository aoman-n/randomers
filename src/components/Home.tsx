/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import GithubInput from './GithubInput';

const container = css`
  padding: 16px 24px;
`;

const Home: FC = () => (
  <div css={container}>
    <GithubInput />
    <p>home</p>
  </div>
);

export default Home;
