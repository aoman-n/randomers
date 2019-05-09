/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { Switch, Route, Redirect } from 'react-router';

import Home from 'components/Home';
import InputCampanyName from 'components/InputCampanyName';

const headerStyle = css`
  background: gray;
  color: white;
`;

const App: FC = () => (
  <div>
    <header css={headerStyle}>
      <h1>title</h1>
    </header>
    <InputCampanyName />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/:companyName/members" />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
