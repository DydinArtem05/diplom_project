// store.js
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import AppReducer from './reducers/AppReducer';

// Расширение для подключения Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  AppReducer,
  form: formReducer,
})

// Создание Redux-стора
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

window.store = store;

export default store;
