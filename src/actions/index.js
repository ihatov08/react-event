import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';

const ROOT_URL = 'http://localhost:3001';

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events`);
  dispatch({ type: READ_EVENTS, payload: { response } });
};

export const createEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events`, values);
  dispatch({ type: CREATE_EVENT, payload: { response }});
};
