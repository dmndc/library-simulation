import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DetailsView from './components/DetailsView/DetailsView';

export default (
  <Switch>
    <Route component={ DetailsView } path="/book/:id" />
  </Switch>
)