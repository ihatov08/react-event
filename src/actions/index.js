import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';
export const READ_EVENT = 'READ_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

const ROOT_URL = 'http://localhost:3001';

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events`);
  dispatch({ type: READ_EVENTS, payload: { response } });
};

export const readEvent = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}`);
  dispatch({ type: READ_EVENT, payload: { response }});
};

export const createEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events`, values);
  dispatch({ type: CREATE_EVENT, payload: { response }});
};

export const updateEvent = values => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/events/${values.id}`, values);
  dispatch({ type: UPDATE_EVENT, payload: { response }});
};

export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}`);
  dispatch({type: DELETE_EVENT, payload: { id }});
};
