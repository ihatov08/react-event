import { connect } from 'react-redux';
import List from '../../components/events/List';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  events: state.Event.events
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(actions.readEvents());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
