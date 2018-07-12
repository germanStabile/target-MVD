import Immutable from 'immutable';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  START_SIGN_UP,
  START_LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  REQUEST_PASSWORD_RESET_ERROR,
  REQUEST_PASSWORD_RESET_SUCCESS,
  REQUEST_PASSWORD_RESET,
} from '../actions/actionTypes';

export const initialState = Immutable.fromJS({
  isLoading: false,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_ERROR:
    case LOG_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
    case SIGN_UP_ERROR:
    case REQUEST_PASSWORD_RESET_ERROR:
    {
      return state.set('isLoading', false);
    }
    case START_LOG_IN:
    case START_SIGN_UP:
    case REQUEST_PASSWORD_RESET:
    {
      return state.set('isLoading', true);
    }
    case REQUEST_PASSWORD_RESET_SUCCESS:
    {
      const newState = state.set('isLoading', false);
      return newState.set('resetMessage', action.message);
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
