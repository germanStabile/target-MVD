import { sessionService } from 'redux-react-native-session';
import { SubmissionError } from 'redux-form';

import userApi from '../api/userApi';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  START_SIGN_UP,
  START_LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  REQUEST_PASSWORD_RESET,
  REQUEST_PASSWORD_RESET_ERROR,
  REQUEST_PASSWORD_RESET_SUCCESS
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

export const requestPasswordReset = () => ({
  type: REQUEST_PASSWORD_RESET
});

export const requestPasswordResetSuccess = () => ({
  type: REQUEST_PASSWORD_RESET_SUCCESS
});

export const requestPasswordResetError = () => ({
  type: REQUEST_PASSWORD_RESET_ERROR
});

export const passwordReset = email => (dispatch) => {
  dispatch(requestPasswordReset());
  return userApi.passwordReset({ email }).then((response) => {
    dispatch(requestPasswordResetError());
  }).catch(() => {
    dispatch(requestPasswordResetError());
  });
};

export const logIn = user => (dispatch) => {
  dispatch(startLogIn());
  return userApi.logIn({ user }).then((response) => {
    sessionService.saveUser(response).then(() => dispatch(logInSuccess()));
  }).catch(() => {
    dispatch(logInError());
    throw new SubmissionError({
      email: true,
      password: 'email and password don\'t match'
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
