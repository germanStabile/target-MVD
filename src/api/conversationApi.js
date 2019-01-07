import api from './apiService.js';

class Conversation {
  static getConversations() {
    return api.get('/match_conversations');
  }
}

export default Conversation;
