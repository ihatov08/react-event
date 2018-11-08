import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import * as serviceWorker from './serviceWorker';
import createStore from './createStore';
import Events from './containers/events';

const history = createBrowserHistory();

const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Events />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
