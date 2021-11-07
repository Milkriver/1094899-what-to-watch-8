import movies from '../../mocks/movies';

export function MoviePageOverview(): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">8,9</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{movies[0].description}</p>
        <p className="film-card__director"><strong>Director: {movies[0].director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {movies[0].starring}</strong></p>
      </div>
    </>
  );
}
