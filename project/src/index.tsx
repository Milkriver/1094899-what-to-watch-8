import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import movies from './mocks/movies';

ReactDOM.render(
  <React.StrictMode>
    <App filmName={movies[0].name} genre={movies[0].genre} released={movies[0].released} src={movies[0].background_image} />
  </React.StrictMode>,
  document.getElementById('root'));
