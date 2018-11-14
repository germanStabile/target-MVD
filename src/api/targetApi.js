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

  static deleteTarget(targetId) {
    return api.delete(`/targets/${targetId}`);
  }
}

export default Target;
