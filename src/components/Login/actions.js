import {Actions, ActionConst} from 'react-native-router-flux';
import * as actionTypes from '../../actionTypes';
import {getUser} from '../../reducers';

const verifyLogin = () => {
  Actions.verifyLogin();
  return {type: actionTypes.VERIFY_LOGIN, payload: {}}
}

export const requestLogin = (json) => {
  return (dispatch, getState) => {
    dispatch(verifyLogin());
  }
}