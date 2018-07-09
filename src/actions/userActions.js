import { sessionService } from 'redux-react-native-session';
import { SubmissionError } from 'redux-form';

import userApi from '../api/userApi';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  START_SIGN_UP,
  START_LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR
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

export const startLogIn = () => ({
  type: START_LOG_IN
});

export const logInSuccess = () => ({
  type: LOG_IN_SUCCESS
});

export const logInError = () => ({
  type: LOG_IN_ERROR
});

export const logIn = user => (dispatch) => {
  dispatch(startLogIn());
  return userApi.logIn({ user }).then((response) => {
    sessionService.saveUser(response).then(() => dispatch(logInSuccess()));
  }).catch(() => {
    dispatch(logInError());
    throw new SubmissionError({
      email: true,
      password: 'these email and password don\'t match'
    });
  });
};

export const logOut = () => () => {
  userApi.logOut().then(() => {
    sessionService.deleteSession();
    sessionService.deleteUser();
  }).catch((err) => {
    throw (err);
  });
};

export const signUp = user => (dispatch) => {
  dispatch(startSignUp());
  return userApi.signUp({ user }).then((response) => {
    sessionService.saveUser(response).then(() => dispatch(signUpSuccess()));
  }).catch(() => {
    dispatch(signUpError());
    throw new SubmissionError({
      email: 'this email is already in use'
    });
  });
};
