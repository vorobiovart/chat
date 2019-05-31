import { connect } from 'react-redux';
import MessagesListComponent from '../components/MessagesList';

const mapStateToProps = state => ({
  messages: state.messages
});

export default connect(mapStateToProps, null)(MessagesListComponent);
