import Immutable from 'immutable';
import {
  GET_TOPICS,
  GET_TOPICS_SUCCESS,
  GET_TOPICS_ERROR,
  CREATE_TARGET,
  CREATE_TARGET_ERROR,
  CREATE_TARGET_SUCCESS,
  TARGET_COORDS_CHANGED,
  START_GET_TARGETS,
  GET_TARGETS_SUCCESS,
  GET_TARGETS_ERROR,
  SELECT_TARGET,
  DELETE_TARGET_ERROR,
  DELETE_TARGET_SUCCESS,
  START_DELETE_TARGET
} from '../actions/actionTypes';

export const initialState = Immutable.fromJS({
  isLoading: false,
});

const targetReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TARGET_SUCCESS:
    case DELETE_TARGET_ERROR:
    case GET_TARGETS_ERROR:
    case CREATE_TARGET_ERROR:
    case GET_TOPICS_ERROR: {
      return state.set('isLoading', false);
    }
    case TARGET_COORDS_CHANGED: {
      return state.set('targetCoords', action.coords);
    }
    case CREATE_TARGET_SUCCESS: {
      const newState = state.set('targetCoords', null);
      return newState.set('isLoading', false)
    }
    case GET_TARGETS_SUCCESS: {
      const newState = state.set('targets', action.targets);
      return newState.set('isLoading', false)
    }
    case GET_TOPICS_SUCCESS: {
      const { topics } = action
      const newState = state.set('topics', topics);
      return newState.set('isLoading', false);
    }
    case START_DELETE_TARGET:
    case START_GET_TARGETS:
    case CREATE_TARGET:
    case GET_TOPICS: {
      return state.set('isLoading', true);
    }
    case SELECT_TARGET: {
      return state.set('selectedTarget', action.target);
    }
    default: {
      return state;
    }
  }
};

export default targetReducer;
