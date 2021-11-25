import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router';
import { AppRoute } from '../../const';
import { fetchPromoMovieAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/actions';
import { IMovie } from '../../types/common';
import { IState } from '../../types/state';
import { Footer } from '../footer/footer';
import GenresList from '../genres-list/genres-list';
import { Header } from '../header/header';
import MoviesList from '../movies-list/movies-list';
import MyListButton from '../my-list-button/my-list-button';
import { ShowMoreButton } from '../show-more-button/show-more-button';


type IProps = {
  cards: IMovie[],
}


const mapStateToProps = ({ promoMovie, authorizationStatus }: IState) => ({
  promoMovie,
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onFetchPromoMovie() {
    dispatch(fetchPromoMovieAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IProps;


function MainPage({ cards, promoMovie, onFetchPromoMovie, authorizationStatus }: ConnectedComponentProps): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    onFetchPromoMovie();
  }, [onFetchPromoMovie]);

  const [moviesShowingLimit, changeMoviesShowingLimit] = useState<number>(8);

  const [limit, changeLimit] = useState<number>(cards.length);
  const handleShowMoreButton = () => {
    const limitCondition = moviesShowingLimit + 8 < limit ? moviesShowingLimit + 8 : limit;
    changeMoviesShowingLimit(limitCondition);
  };
  const checkIsButtonShowen = (moviesShowingLimit < limit);

  return (
    <div>

      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoMovie.backgroundImage} alt={promoMovie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoMovie.posterImage} alt={promoMovie.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoMovie.genre}</span>
                <span className="film-card__year">{promoMovie.released}</span>
              </p>

              <div className="film-card__buttons">

                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(AppRoute.Player.replace(':id', promoMovie.id.toString()))}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton currentMovie={promoMovie} />
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
            checkIsButtonShowen={checkIsButtonShowen}
          />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export { MainPage };
export default connector(MainPage);
