import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import * as serviceWorker from './serviceWorker';
import createStore from './createStore';
import EventList from './containers/events/List';
import EventNew from './containers/events/New';
import EventEdit from './containers/events/Edit';
import RegistrationNew from './containers/registrations/New';
import SessionNew from './containers/sessions/New';
import SessionDestroy from './containers/sessions/Destroy';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { verifyCredentials } from './redux-token-auth-config';
import { generateRequireSignInWrapper } from 'redux-token-auth';

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/sign_in'
})

const history = createBrowserHistory();

const store = createStore(history);
verifyCredentials(store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <SessionDestroy />
        <Switch>
          <Route exact path="/events/new" component={EventNew} />
          <Route exact path="/sign_in"component={SessionNew} />
          <Route exact path="/" component={requireSignIn(EventList)} />
          <Route exact path="/events/:id/edit" component={EventEdit} />
          <Route exact path="/events" component={requireSignIn(EventList)} />
          <Route exact path="/registrations/new" component={RegistrationNew}/>
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
