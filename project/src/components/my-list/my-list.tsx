import { MovieCardElement } from './../movie-card-element/movie-card-element';
import { movie } from '../../types/common';
import { useState } from 'react';


interface IProps {
  cards: movie[]
}

export function MyList({ cards }: IProps): JSX.Element {
  const [activeCardId, setActiveMovieCardId] = useState<number | undefined>();

  const favoriteMovies = cards.filter((x)=>x.is_favorite);

  const renderMyMovie = (singleCard: movie): React.ReactNode => (
    <MovieCardElement
      key={singleCard.id}
      activeCardId={activeCardId}
      filmName={singleCard.name}
      videolink={singleCard.poster_image}
      posterSrc={singleCard.poster_image}
      id={singleCard.id}
      onMouseOver={setActiveMovieCardId}
    />);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="#/" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">

          {favoriteMovies.map(renderMyMovie)}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
