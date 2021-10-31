import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import movies from './mocks/movies';
import reviews from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App cards={movies} reviews={reviews}/>
  </React.StrictMode>,
  document.getElementById('root'));
