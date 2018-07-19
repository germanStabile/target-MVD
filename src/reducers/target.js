import Immutable from 'immutable';
import {
  GET_TOPICS,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_ERROR,
  CREATE_TARGET,
  CREATE_TARGET_ERROR,
  CREATE_TARGET_SUCCESS,
  TARGET_COORDS_CHANGED
} from '../actions/actionTypes';

export const initialState = Immutable.fromJS({
  isLoading: false,
});

const targetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TARGET_ERROR:
    case GET_TOPICS_ERROR:
    {
      return state.set('isLoading', false);
    }
    case TARGET_COORDS_CHANGED: {
      return state.set('targetCoords', action.coords);
    }
    case CREATE_TARGET_SUCCESS: {
      const newState = state.set('isLoading', false);
      return newState.set('targetCoords', null);
    }
    case GET_TOPICS_SUCCESS:
    {
      const newState = state.set('topics', action.topics);
      return newState.set('isLoading', false);
    }
    case CREATE_TARGET:
    case GET_TOPICS:
    {
      return state.set('isLoading', true);
    }
    default: {
      return state;
    }
  }
};

export default targetReducer;
