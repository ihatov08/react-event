import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import * as serviceWorker from './serviceWorker';
import createStore from './createStore';
import EventList from './containers/events/List';
import EventNew from './containers/events/New';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const history = createBrowserHistory();

const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/events/new" component={EventNew} />
        <Route exact path="/" component={EventList} />
        <Route exact path="/events" component={EventList} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
