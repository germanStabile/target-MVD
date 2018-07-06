import Immutable from 'immutable';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  START_SIGN_UP
} from '../actions/actionTypes';

export const initialState = Immutable.fromJS({
  isLoading: false,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
    case SIGN_UP_ERROR: {
      return state.set('isLoading', false);
    }
    case START_SIGN_UP: {
      return state.set('isLoading', true);
    }
    default: {
      return state
    }
  }
}

export default userReducer;
