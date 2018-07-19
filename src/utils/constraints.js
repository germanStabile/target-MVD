import validate from 'validate.js';

export const login = {
  email: {
    presence: { message: 'oops, this email is not valid' },
    email: { message: 'oops, this email is not valid' }
  },
  password: {
    presence: { message: 'you forgot to put your password' }
  }
};

export const resetPassword = {
  password: {
    presence: { message: 'the password must be at least 8 characters long' },
    length: {
      minimum: 8,
      message: 'the password must be at least 8 characters long'
    }
  },
  passwordConfirmation: {
    presence: true,
    equality: {
      attribute: 'password',
      message: 'passwords don\'t match'
    }
  }
};

export const createTarget = {
  areaLength: {
    presence: { message: 'you forgot to set an area length' },
    format: {
      pattern: '^[0-9]+$',
      message: 'please put a number for area length',
    }
  },
  title: {
    presence: { message: 'you forgot to put a title' }
  },
  topic: {
    presence: { message: 'you forgot to select a topic' }
  }
};

export const forgotPassword = {
  email: {
    presence: { message: 'oops, this email is not valid' },
    email: { message: 'oops, this email is not valid' }
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
    presence: { message: 'the password must be at least 8 characters long' },
    length: {
      minimum: 8,
      message: 'the password must be at least 8 characters long'
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

export const validations = constraints => data => validate(data.toJS(),
  constraints, { fullMessages: false }) || {};
