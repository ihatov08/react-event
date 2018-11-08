import _ from 'lodash';
import {
  READ_EVENTS,
  READ_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
       } from '../actions';

export default(state = {}, action) => {
  switch (action.type) {
  case READ_EVENTS:
    return _.mapKeys(action.payload.response.data, 'id');
  case CREATE_EVENT:
  case READ_EVENT:
  case UPDATE_EVENT:
    const event = action.payload.response.data;
    return {...state, [event.id]: event };
  default:
    return state;
  }
}
