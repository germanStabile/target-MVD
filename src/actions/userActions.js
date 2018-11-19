import { sessionService } from 'redux-react-native-session';
import { SubmissionError } from 'redux-form';

import userApi from '../api/userApi';
import { resetPassDeepLink } from '../constants/constants';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  START_SIGN_UP,
  START_LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  REQUEST_PASSWORD_RESET,
  REQUEST_PASSWORD_RESET_ERROR,
  REQUEST_PASSWORD_RESET_SUCCESS,
  EDIT_PASSWORD_RESET,
  EDIT_PASSWORD_RESET_SUCCESS,
  EDIT_PASSWORD_RESET_ERROR,
  START_EDIT_ACCOUNT,
  EDIT_ACCOUNT_SUCCESS,
  EDIT_ACCOUNT_ERROR
} from './actionTypes';
import {
  emailInUse,
  emailPassNoMatch,
  problemResettingPass,
  emailNoMatchRecords
} from '../constants/messages';

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

export const requestPasswordResetSuccess = message => ({
  message,
  type: REQUEST_PASSWORD_RESET_SUCCESS
});

export const requestPasswordResetError = () => ({
  type: REQUEST_PASSWORD_RESET_ERROR
});

export const editPasswordReset = () => ({
  type: EDIT_PASSWORD_RESET
});

export const editPasswordResetSuccess = () => ({
  type: EDIT_PASSWORD_RESET_SUCCESS
});

export const editPasswordResetError = () => ({
  type: EDIT_PASSWORD_RESET_ERROR
});

export const startEditAccount = () => ({
  type: START_EDIT_ACCOUNT
});

export const editAccountSuccess = () => ({
  type: EDIT_ACCOUNT_SUCCESS
});

export const editAccountError = () => ({
  type: EDIT_ACCOUNT_ERROR
});

export const editAccount = (userId, user) => (dispatch) => {
  dispatch(startEditAccount());
  return userApi.editAccount(userId, user).then(({ user }) => {
    sessionService.saveUser(user).then(() => dispatch(editAccountSuccess()));
  }).catch( error => {
    dispatch(editAccountError());
    throw new SubmissionError({
      _error: error.error
    });
  });
};

export const resetPassword = email => (dispatch) => {
  dispatch(requestPasswordReset());
  return userApi.requestPasswordReset({ email, redirect_url: resetPassDeepLink }).then((response) => {
    dispatch(requestPasswordResetSuccess(response.message));
  }).catch(() => {
    dispatch(requestPasswordResetError());
    throw new SubmissionError({
      email: emailNoMatchRecords
    });
  });
};

export const editResetPassword = passwords => (dispatch) => {
  dispatch(editPasswordReset());
  return userApi.editPasswordReset(passwords).then(() => {
    dispatch(editPasswordResetSuccess());
  }).catch(() => {
    dispatch(editPasswordResetError());
    throw new SubmissionError({
      password: problemResettingPass
    });
  });
};

export const logIn = user => (dispatch) => {
  dispatch(startLogIn());
  return userApi.logIn({ user }).then(({ data }) => {
    sessionService.saveUser(data).then(() => dispatch(logInSuccess()));
  }).catch(() => {
    dispatch(logInError());
    throw new SubmissionError({
      email: true,
      password: emailPassNoMatch
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
      email: emailInUse
    });
  });
};
