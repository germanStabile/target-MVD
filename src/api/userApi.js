import api from './apiService';

class Session {
  static signUp(user) {
    return api.post('api/v1/users', user);
  }
}

export default Session;
