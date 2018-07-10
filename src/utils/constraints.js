import validate from 'validate.js';

export const login = {
  email: {
    presence: { message: 'oops, this email is not valid' },
    email: { message: 'oops, this email is not valid' }
  },
  password: {
    presence: { message: 'you forgor to put your password' }
  }
};

export const createAccount = {
  username: {
    presence: { message: 'you forgot to put your name' }
  },
  email: {
    presence: { message: 'oops, this email is not valid' },
    email: { message: 'oops, this email is not valid' }
  },
  password: {
    presence: { message: 'the password must be 8 characters long' },
    length: {
      minimum: 8,
      message: 'the password must be 6 characters long'
    }
  },
  passwordConfirmation: {
    presence: true,
    equality: {
      attribute: 'password',
      message: 'passwords don\'t match'
    }
  },
  gender: {
    presence: { message: 'you forgot to select your gender' }
  }
};

export const validations = constraints => data => validate(data.toJS(), constraints, { fullMessages: false }) || {};
