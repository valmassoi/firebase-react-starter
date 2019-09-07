import React from 'react';
import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './App.css';

import { rootReducer } from './reducers/createStore';
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware)
));

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        Hello world!
      </Provider>
    </div>
  );
}

export default App;
