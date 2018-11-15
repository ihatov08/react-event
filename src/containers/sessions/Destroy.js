import { connect } from 'react-redux';
import SessionDestroy from '../../components/sessions/Destroy';
import { signOutUser } from '../../redux-token-auth-config';

const mapDispatchToProps = ({ signOutUser });

export default connect(null, mapDispatchToProps)(SessionDestroy);
