import { connect } from 'react-redux';
import SessionNew from '../../components/sessions/New';
import { reduxForm } from 'redux-form';
import { signInUser } from '../../redux-token-auth-config';

const validate = values => {
  const errors = {};

  if(!values.email) errors.email = "Enter a title, please.";

  return errors;
};

const mapDispatchToProps = ({ signInUser });

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'sessionNewForm'})(SessionNew)
);
