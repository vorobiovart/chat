import { connect } from 'react-redux';
import SidebarComponent from '../components/Sidebar';

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, null)(SidebarComponent);
