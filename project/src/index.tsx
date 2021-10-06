import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const card = {
  filmName: 'The Grand Budapest Hotel',
  genre: 'Drama',
  released: 2014,
};


ReactDOM.render(
  <React.StrictMode>
    <App filmName={card.filmName} genre={card.genre} released={card.released}/>
  </React.StrictMode>,
  document.getElementById('root'));
