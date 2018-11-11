import { connect } from 'react-redux';
import EventNew from '../../components/events/New';
import * as actions from '../../actions';
import { reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};

  if(!values.title) errors.title = "Enter a title, please.";
  if(!values.body) errors.body = "Enter a body, please";

  return errors;
};

const mapDispatchToProps = dispatch => ({
  createEvent(values) {
    dispatch(actions.createEvent(values));
  }
});

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm'})(EventNew)
);
