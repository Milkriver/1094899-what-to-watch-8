import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppRoute } from '../../const';
import { fetchSingleMovieAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/actions';
import { IMovie } from '../../types/common';
import { IState } from '../../types/state';
import { Footer } from '../footer/footer';
import Header from '../header/header';
import { MovieCardElement } from '../movie-card-element/movie-card-element';
import { Tabs } from '../tabs/tabs';
interface IProps {
  cards: IMovie[]
}

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
type ConnectedComponentProps = PropsFromRedux & IProps;

function MoviePage({ cards, onFetchMovie, movie: activeMovie }: ConnectedComponentProps): JSX.Element {
  const sameMovie = cards.filter((movieElement) => movieElement.genre === activeMovie.genre).slice(0, 4);
  const [activeCardId, setActiveMovieCardId] = useState<number | undefined>();
  const handleActiveCard = (id: number | undefined) => {
    setActiveMovieCardId(id);
  };

  useEffect(() => {
    const currentPageId = window.location.pathname.replace(AppRoute.Film.replace(':id', ''), '');
    onFetchMovie(currentPageId);
  });

  return (
    <>
      <section className="film-card film-card--full" style={{ backgroundColor: activeMovie.background_color }}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={activeMovie.background_image} alt={activeMovie.name} />
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
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={activeMovie.poster_image} alt={activeMovie.name} width="218" height="327" />
            </div>
            <Tabs movie={activeMovie} />
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
                    videolink={singleCard.preview_video_link}
                    posterSrc={singleCard.preview_image}
                    genre={singleCard.genre}
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
