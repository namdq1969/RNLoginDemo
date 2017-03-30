import {combineReducers} from 'redux';
import nav, * as fromNav from './navReducer';
import user, * as fromUser from './userReducer';

export default combineReducers({nav, user});
export const getNav = (state) => fromNav.getNav(state.nav);
export const getUser = (state) => fromUser.getUser(state.user);