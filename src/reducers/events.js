import _ from 'lodash';
import {
  READ_EVENTS,
  READ_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from '../actions';

import initialState from './initial-state';

export default(state = initialState, action) => {
  switch (action.type) {
  case READ_EVENTS:
    return _.mapKeys(action.payload.response.data, 'id');
  case CREATE_EVENT:
  case READ_EVENT:
  case UPDATE_EVENT:
    const event = action.payload.response.data;
    return {...state, [event.id]: event };
  case DELETE_EVENT:
    delete state[action.payload.id];
    return {...state};
  default:
    return state;
  }
}
