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

export const createAccount = {
  name: {
    presence: { message: "you forgot to put your name" }
  },
  email: {
    presence: { message: "oops, this email is not valid" },
    email: { message: "oops, this email is not valid" }
  },
  password: {
    presence: { message: "the password must be 6 characters long" },
    length: {
      minimum: 6,
      message : "the password must be 6 characters long"
    }
  },
  confirmPassword: {
    presence: true,
    equality: {
      attribute: "password",
      message: "passwords don't match"
    }
  },
  gender: {
    presence: { message: "you forgot to select your gender" }
  }
};

export const validations = constraints =>
  data => validate(data.toJS(), constraints, { fullMessages:false }) || {};