import 'babel-polyfill';
import React from 'react';
import {
  browserHistory,
  Router,
  Route,
} from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import TodoList from './pages/todo-page';

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="*" component={TodoList} />
    </Router>
  </Provider>
);

export default routes;
