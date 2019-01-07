import conversationApi from '../api/conversationApi';
import  {
  START_GET_CONVERSATIONS,
  GET_CONVERSATIONS_ERROR,
  GET_CONVERSATIONS_SUCCESS
} from './actionTypes';

export const startGetConversations = () => ({
  type: START_GET_CONVERSATIONS
});

export const getConversationsError = () => ({
  type: GET_CONVERSATIONS_ERROR
});

export const getConversationsSuccess = matches => ({
  matches,
  type: GET_CONVERSATIONS_SUCCESS
});

export const getConversations = () => (dispatch) => {
  dispatch(startGetConversations());
  return conversationApi.getConversations().then(({ matches }) => {
    dispatch(getConversationsSuccess(matches));
  }).catch((error) => {
    dispatch(getConversationsError());
  });
};
