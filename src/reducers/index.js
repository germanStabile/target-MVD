import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { sessionImmutableReducer as session } from 'redux-react-native-session';

import user from './user';

const AppReducer = combineReducers({
  form,
  session,
  user
});

export default AppReducer;
