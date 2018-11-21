import api from './apiService';

class Session {
  static signUp(user) {
    return api.post('/users', user);
  }

  static logOut() {
    return api.delete('/users/sign_out');
  }

  static logIn(user) {
    return api.post('/users/sign_in', user);
  }

  static requestPasswordReset(email) {
    return api.post('/users/password', email);
  }

  static editPasswordReset(passwords) {
    return api.put('/users/password', passwords);
  }

  static editAccount(userId, user) {
    return api.put(`/users/${userId}`, user)
  }
}

export default Session;
