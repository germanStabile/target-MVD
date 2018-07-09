import api from './apiService';

class Session {
  static signUp(user) {
    return api.post('api/v1/users', user);
  }

  static logOut() {
    return api.delete('api/v1/users/sign_out');
  }

  static logIn(user) {
    return api.post('api/v1/users/sign_in', user);
  }
}

export default Session;
