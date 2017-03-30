import {Actions, ActionConst} from 'react-native-router-flux';
import * as actionTypes from '../actionTypes';

const DEFAULT_STATE = {
  user: {
    token: undefined
  }
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case `${actionTypes.LOGIN}_FULFILLED`:
      {
        return {
          ...state,
          user: {
            ...state.user,
            token: action.payload.token
          }
        }
        break;
      }
    default:
      return state
  }
}

export const getUser = (state) => ({
  user: state.user
})
