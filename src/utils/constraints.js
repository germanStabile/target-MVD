import validate from 'validate.js';

export const login = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true
  }
};

export const signup = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true
  },
  name: {
    presence: true
  }
};

export const validations = constraints =>
  data => validate(data.toJS(), constraints) || {};
