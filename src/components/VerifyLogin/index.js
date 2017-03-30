import VerifyLogin from './VerifyLogin';
import {connect} from 'react-redux';
import * as actions from './actions';
import {getNav, getUser} from '../../reducers';

const mapStateToProps = (state) => ({
  ...getNav(state),
  ...getUser(state)
})

export default connect(mapStateToProps, actions)(VerifyLogin);
