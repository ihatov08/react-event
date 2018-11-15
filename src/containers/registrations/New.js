import { connect } from 'react-redux';
import RegistrationNew from '../../components/registrations/New';
import { reduxForm } from 'redux-form';
import { registerUser } from '../../redux-token-auth-config';

const validate = values => {
  const errors = {};

  if(!values.email) errors.email = "Enter a title, please.";

  return errors;
};

const mapDispatchToProps = ({ registerUser: registerUser });

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'registrationNewForm'})(RegistrationNew)
);
