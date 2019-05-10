/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { Button } from 'semantic-ui-react';
import GithubInput from './GithubInput';

const Home: FC = () => (
  <div>
    <GithubInput />
    <p>home</p>
    <Button primary>Primary</Button>
  </div>
);

export default Home;
