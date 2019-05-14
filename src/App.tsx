/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';
import { Switch, Route, Redirect } from 'react-router';

import Home from 'components/Home';
import Organizations from 'src/components/Organizations/Index';
import Members from 'src/containers/Organizations/Members';
import Confirmation from 'containers/Confirmation';
import Random from 'containers/Random';
import Header from 'components/Header';
import NotFound from 'components/NotFound';

import pages from './pages';

const App: FC = () => (
  <div>
    <Header title="github randomers" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path={pages.organizations.path} component={Organizations} />
      <Route path="/:organizationName/members" component={Members} />
      <Route path="/confirmation" component={Confirmation} />
      <Route path="/random" component={Random} />
      <Route path="/" component={NotFound} />
      {/* <Redirect to="/" /> */}
    </Switch>
  </div>
);

export default App;
