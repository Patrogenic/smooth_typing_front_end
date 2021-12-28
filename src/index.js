import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import typingTestReducer from './reducers/typingTestReducer'
import testResultsReducer from './reducers/testResultsReducer'

const reducer = combineReducers({
  typingTest: typingTestReducer,
  testResults: testResultsReducer,
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
