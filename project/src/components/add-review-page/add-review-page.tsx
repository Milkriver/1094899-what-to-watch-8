import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { fetchSingleMovieAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/actions';
import { IState } from '../../types/state';
import { AddReviewForm } from '../add-review-form/add-review-form';
import { HeaderLogo } from '../header-logo/header-logo';
import HeaderUserBlock from '../header-user-block/header-user-block';

const mapStateToProps = ({ movie }: IState) => ({
  movie,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onFetchMovie(cardId: string) {
    dispatch(fetchSingleMovieAction(cardId));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function AddReviewPage({ onFetchMovie, movie: activeMovie }: PropsFromRedux): JSX.Element {
  const currentPageId = window.location.pathname.replace(AppRoute.Film.replace(':id', ''), '');
  onFetchMovie(currentPageId);
  return (
    <section className="film-card film-card--full" style={{ backgroundColor: activeMovie.background_color }}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={activeMovie.background_image} alt={activeMovie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <HeaderLogo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film.replace(':id', currentPageId)} className="breadcrumbs__link">{activeMovie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <div className="breadcrumbs__link" > Add review</div>
              </li>
            </ul>
          </nav>
          <HeaderUserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={activeMovie.poster_image} alt={activeMovie.name} width="218" height="327" />
        </div>
      </div>
      <div className="add-review"><AddReviewForm/>
      </div>
    </section >
  );
}

export { AddReviewPage };
export default connector(AddReviewPage);
