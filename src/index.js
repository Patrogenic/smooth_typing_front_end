import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk';
import typingTestReducer from './reducers/typingTestReducer'
import testResultsReducer from './reducers/testResultsReducer'
import userReducer from './reducers/userReducer'
import introTestReducer from './reducers/introTestReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
}

const rootReducer = combineReducers({
  typingTest: typingTestReducer,
  testResults: testResultsReducer,
  user: userReducer,
  introTest: introTestReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk),
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
