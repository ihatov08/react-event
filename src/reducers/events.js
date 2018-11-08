import _ from 'lodash';
import { READ_EVENTS } from '../actions';

const initialState = {
  events: undefined
};

export default(state = initialState, action) => {
  switch (action.type) {
  case READ_EVENTS:
    return {
      ...state,
      events: _.mapKeys(action.payload.response.data, 'id')
    }
  default:
    return state;
  }
}
