import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DetailsView from './components/DetailsView/DetailsView';
import BrowseView from './components/BrowseView/BrowseView';

export default (
  <Switch>
    <Route component={ DetailsView } path="/book/:id" />
    <Route component={ BrowseView } path="/browse" />
  </Switch>
)