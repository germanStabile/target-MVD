import api from './apiService';

class Target {
  static getTopics() {
    return api.get('/topics');
  }

  static createTarget(target) {
    return api.post('/targets', target);
  }

  static getTargets() {
    return api.get('/targets');
  }
}

export default Target;
