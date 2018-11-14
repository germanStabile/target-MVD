import targetApi from '../api/targetApi';
import {
  GET_TOPICS,
  GET_TOPICS_ERROR,
  GET_TOPICS_SUCCESS,
  CREATE_TARGET,
  CREATE_TARGET_SUCCESS,
  CREATE_TARGET_ERROR,
  TARGET_COORDS_CHANGED,
  START_GET_TARGETS,
  GET_TARGETS_SUCCESS,
  GET_TARGETS_ERROR
} from './actionTypes';

export const startGetTopics = () => ({
  type: GET_TOPICS
});

export const getTopicsSuccess = topics => ({
  topics,
  type: GET_TOPICS_SUCCESS
});

export const getTopicsError = () => ({
  type: GET_TOPICS_ERROR
});

export const startCreateTarget = () => ({
  type: CREATE_TARGET
});

export const createTargetSuccess = () => ({
  type: CREATE_TARGET_SUCCESS
});

export const createTargetError = () => ({
  type: CREATE_TARGET_ERROR
});

export const changeTargetCoords = coords => ({
  coords,
  type: TARGET_COORDS_CHANGED
});

export const startGetTargets = () => ({
  type: START_GET_TARGETS
});

export const getTargetsSuccess = targets => ({
  targets,
  type: GET_TARGETS_SUCCESS
});

export const getTargetsError = () => ({
  type: GET_TARGETS_ERROR
});

export const getTargets = () => (dispatch) => {
  dispatch(startGetTargets());
  return targetApi.getTargets().then(({ targets }) => {
    dispatch(getTargetsSuccess(targets));
  }).catch(() => {
    dispatch(getTargetsError());
  });
};

export const createTarget = target => (dispatch) => {
  dispatch(startCreateTarget());
  return targetApi.createTarget(target).then(() => {
    dispatch(createTargetSuccess());
  }).catch((err) => {
    dispatch(createTargetError());
    throw err;
  });
};

export const getTopics = () => (dispatch) => {
  dispatch(startGetTopics());
  return targetApi.getTopics().then((response) => {
    dispatch(getTopicsSuccess(response.topics));
  }).catch((err) => {
    dispatch(getTopicsError());
    throw err;
  });
};
