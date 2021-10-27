import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import movies from './mocks/movies';

ReactDOM.render(
  <React.StrictMode>
    <App filmName={movies[1].name} genre={movies[1].genre} released={movies[1].released}/>
  </React.StrictMode>,
  document.getElementById('root'));
