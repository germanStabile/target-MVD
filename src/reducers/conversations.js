import Immutable from 'immutable';

import {
  START_GET_CONVERSATIONS,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR
} from '../actions/actionTypes';

export const initialState = Immutable.fromJS({
  isLoading: false,
});

const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONVERSATIONS_ERROR: {
      return state.set('isLoading', false);
    }
    case START_GET_CONVERSATIONS: {
      return state.set('isLoading', true);
    }
    case GET_CONVERSATIONS_SUCCESS: {
      const { matches } = action;
      const newState = state.set('matches', matches);
      return newState.set('isLoading', false);
    }
  default: {
    return state;
    }
  }
};

export default conversationsReducer;
