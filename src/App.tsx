/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';
import { Switch, Route, Redirect } from 'react-router';

import Home from 'components/Home';
import Members from 'containers/Members';
import Confirmation from 'containers/Confirmation';
import Header from 'components/Header';
import NotFound from 'components/NotFound';

const App: FC = () => (
  <div>
    <Header title="github randomers" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:organizationName/members" component={Members} />
      <Route path="/confirmation" component={Confirmation} />
      <Route path="/random" />
      <Route path="/" component={NotFound} />
      {/* <Redirect to="/" /> */}
    </Switch>
  </div>
);

export default App;
