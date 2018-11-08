import { connect } from 'react-redux';
import EventEdit from '../../components/events/Edit';
import * as actions from '../../actions';
import { reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};

  if(!values.title) errors.title = "Enter a title, please.";
  if(!values.body) errors.body = "Enter a body, please";

  return errors;
};

const mapStateToProps = (state, ownProps) => {
  const event = state.Event[ownProps.match.params.id];
  return { initialValues:  event, event };
};

const mapDispatchToProps = dispatch => ({
  readEvent(id) {
    dispatch(actions.readEvent(id));
  },
  updateEvent(id){
    dispatch(actions.updateEvent(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventEditFrom', enableReinitialize: true})(EventEdit)
);
