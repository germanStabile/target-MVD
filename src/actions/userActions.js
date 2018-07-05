import { SubmissionError } from 'redux-form';
import { sessionService } from 'redux-react-native-session';

import userApi from '../api/userApi';
import * as types from './actionTypes';

export const signUpSuccess = () => ({
  type: types.SIGN_UP_SUCCESS
  });

  export const signUpError = () => ({
    type: types.SIGN_UP_ERROR
    });

export const signUp = user =>
  dispatch =>
  userApi.signUp({ user }).then( response => {
       console.log("Success?", response);
   }).catch( err => {
      console.log("we fall in the catch and will throw the submission error");
       throw new SubmissionError({
         _error: err.error,
       });
  });
