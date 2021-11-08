import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app/app';
import { movies } from './mocks/movies';
import reviews from './mocks/reviews';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App cards={movies} reviews={reviews} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
