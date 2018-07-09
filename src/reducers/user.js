import Immutable from 'immutable';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  START_SIGN_UP,
  START_LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR
} from '../actions/actionTypes';

export const initialState = Immutable.fromJS({
  isLoading: false,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_ERROR:
    case LOG_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
    case SIGN_UP_ERROR: {
      return state.set('isLoading', false);
    }
    case START_LOG_IN:
    case START_SIGN_UP: {
      return state.set('isLoading', true);
    }
    default: {
      return state
    }
  }
}

export default userReducer;
