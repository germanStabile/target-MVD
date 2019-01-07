import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { sessionImmutableReducer as session } from 'redux-react-native-session';

import user from './user';
import target from './target';
import conversations from './conversations';

const AppReducer = combineReducers({
  form,
  session,
  user,
  conversations,
  target
});

export default AppReducer;
