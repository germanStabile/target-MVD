import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AppReducer from '../reducers';

export default function configureStore(initialState) {
  const middlewares = [
    thunkMiddleware
  ];

  const store = createStore(AppReducer, initialState, applyMiddleware(...middlewares));

  return store;
}
