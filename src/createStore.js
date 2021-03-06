import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from './reducers';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
      form: formReducer,
      reduxTokenAuth: reduxTokenAuthReducer
    }),
    composeWithDevTools(
      applyMiddleware(
        // logger,
        thunk,
        routerMiddleware(history)
      )
    )
  );
}
