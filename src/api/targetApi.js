import api from './apiService';

class Target {
  static getTopics() {
    return api.get('api/v1/topics');
  }

  static createTarget(target) {
    return api.post('api/v1/targets', target);
  }
}

export default Target;