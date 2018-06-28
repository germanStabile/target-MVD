import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

const AppReducer = combineReducers({
  form
});

export default AppReducer;
