import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { IMovie } from '../../types/common';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';
import { ShowMoreButton } from '../show-more-button/show-more-button';


type IProps = {
  cards: IMovie[]
}

export function MainPage({ cards }: IProps): JSX.Element {
  const history = useHistory();

  const [moviesShowingLimit, changeMoviesShowingLimit] = useState<number>(8);

  const [limit, changeLimit] = useState<number>(cards.length);
  const handleShowMoreButton = () => {
    const limitCondition = moviesShowingLimit + 8 < limit ? moviesShowingLimit + 8 : limit;
    changeMoviesShowingLimit(limitCondition);
  };
  const isButtonShowen = (moviesShowingLimit < limit);


  return (
    <div>

      <section className="film-card">
        <div className="film-card__bg">
          <img src={cards[0].background_image} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Link to={'/'} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="/#" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{cards[0].name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{cards[0].genre}</span>
                <span className="film-card__year">{cards[0].released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(AppRoute.Player)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={() => history.push(AppRoute.MyList)}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList
            movies={cards}
          />

          <div className="catalog__films-list">
            <MoviesList
              changeLimit={changeLimit}
              cards={cards}
              moviesShowingLimit={moviesShowingLimit}
            />
          </div>
          <ShowMoreButton
            handleShowMoreButton={handleShowMoreButton}
            isButtonShowen={isButtonShowen}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={'/'} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
