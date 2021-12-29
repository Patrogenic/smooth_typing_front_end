import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import typingTestReducer from './reducers/typingTestReducer'
import testResultsReducer from './reducers/testResultsReducer'
import userReducer from './reducers/userReducer'
import introTestReducer from './reducers/introTestReducer'

const reducer = combineReducers({
  typingTest: typingTestReducer,
  testResults: testResultsReducer,
  user: userReducer,
  introTest: introTestReducer,
})

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
