import { SubmissionError } from 'redux-form';
import { sessionService } from 'redux-react-native-session';

import userApi from '../api/userApi';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  START_SIGN_UP,
  LOG_OUT_SUCCESS
} from './actionTypes';

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS
  });

export const signUpError = () => ({
  type: SIGN_UP_ERROR
  });

export const startSignUp = () => ({
  type: START_SIGN_UP
});

export const logOutSuccess = () => ({
  type: LOG_OUT_SUCCESS
});

export const logOut = () =>
  (dispatch) => {
    userApi.logOut().then(() => {
      sessionService.deleteSession();
      sessionService.deleteUser();
      dispatch(logOutSuccess());
    }).catch((err) => {
      throw (err);
    });
  };

export const signUp = user =>
 dispatch => {
  dispatch(startSignUp());
  userApi.signUp({ user }).then(response => {
    sessionService.saveUser(response).then(() => dispatch(signUpSuccess()));
  }).catch(error => {
    dispatch(signUpError());
    throw new SubmissionError({
      _error: error,
    });
  })
}
