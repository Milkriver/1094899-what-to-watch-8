import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { AppRoute, AuthorizationStatus } from '../../const';
import { fetchReviewsAction, fetchSameGenreMoviesAction, fetchSingleMovieAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/actions';
import { IState } from '../../types/state';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { MovieCardElement } from '../movie-card-element/movie-card-element';
import { Tabs } from '../tabs/tabs';
import MyListButton from '../my-list-button/my-list-button';

const mapStateToProps = ({ movie, sameMovies, reviews, authorizationStatus }: IState) => ({
  movie,
  sameMovies,
  reviews,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onFetchMovie(cardId: string) {
    dispatch(fetchSingleMovieAction(cardId));
  },
  onFetchSameGenreMovies(cardId: string) {
    dispatch(fetchSameGenreMoviesAction(cardId));
  },
  onFetchReviews(cardId: string) {
    dispatch(fetchReviewsAction(cardId));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;


function MoviePage({ sameMovies, reviews, onFetchMovie, onFetchSameGenreMovies, onFetchReviews, movie: activeMovie, authorizationStatus }: PropsFromRedux): JSX.Element {
  const currentPageId = window.location.pathname.replace(AppRoute.Film.replace(':id', ''), '');
  const sameMovie = sameMovies.slice(0, 4);
  const [activeCardId, setActiveMovieCardId] = useState<number | undefined>();
  const handleActiveCard = (id: number | undefined) => { setActiveMovieCardId(id); };
  const history = useHistory();

  useEffect(() => {
    onFetchMovie(currentPageId);
    onFetchSameGenreMovies(currentPageId);
    onFetchReviews(currentPageId);
  }, [onFetchMovie, onFetchReviews, onFetchSameGenreMovies, currentPageId]);
  return (

    <>
      <section className="film-card film-card--full" style={{ backgroundColor: activeMovie.backgroundColor }}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={activeMovie.backgroundImage} alt={activeMovie.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{activeMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{activeMovie.genre}</span>
                <span className="film-card__year">{activeMovie.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(AppRoute.Player.replace(':id', activeMovie.id.toString()))}>
                  <svg viewBox="0 0 19 19" width="19" height="19"><use xlinkHref="#play-s"></use></svg>
                  <span>Play</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth
                  ?

                  <MyListButton currentMovie={activeMovie} />
                  : ''}

                {authorizationStatus === AuthorizationStatus.Auth
                  ? <Link to={AppRoute.AddReview.replace(':id', activeMovie.id.toString())} className="btn film-card__button">Add review</Link>
                  : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={activeMovie.posterImage} alt={activeMovie.name} width="218" height="327" />
            </div>
            <Tabs movie={activeMovie} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {
              <>
                {sameMovie.map((singleCard) => (
                  <MovieCardElement
                    key={singleCard.id}
                    activeCardId={activeCardId}
                    filmName={singleCard.name}
                    id={singleCard.id}
                    onMouseOver={handleActiveCard}
                    videolink={singleCard.previewVideoLink}
                    posterSrc={singleCard.previewImage}
                  />
                ))}
              </>
            }
          </div>
        </section>
        <Footer />
      </div>
    </>

  );
}

export { MoviePage };
export default connector(MoviePage);
