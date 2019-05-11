/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';
import { Switch, Route, Redirect } from 'react-router';

import Home from 'components/Home';
// import Members from 'components/Members';
import Members from 'containers/Members';
import Header from 'components/Header';
import NotFound from 'components/NotFound';

const App: FC = () => (
  <div>
    <Header title="github randomers" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:organizationName/members" component={Members} />
      <Route path="/confirmation" />
      <Route path="/random" />
      <Route path="/" component={NotFound} />
      {/* <Redirect to="/" /> */}
    </Switch>
  </div>
);

export default App;
