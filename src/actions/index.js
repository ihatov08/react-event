import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';

const ROOT_URL = 'http://localhost:3001';

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events`);
  dispatch({ type: READ_EVENTS, payload: { response } });
};
