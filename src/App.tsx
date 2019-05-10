/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { Switch, Route, Redirect } from 'react-router';

import Home from 'components/Home';
import Members from 'components/Members';
// import Members from 'containers/Members';

const headerStyle = css`
  background: gray;
  color: white;
`;

const App: FC = () => (
  <div>
    <header css={headerStyle}>
      <h1>title</h1>
    </header>
    <Switch>
      <Route path="/:companyName/members" component={Members} />
      <Route path="/confirmation" />
      <Route path="/random" />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
