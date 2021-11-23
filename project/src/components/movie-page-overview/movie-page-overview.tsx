import { IMovie } from '../../types/common';

interface IProps {
  movie: IMovie
}

export function MoviePageOverview({ movie }: IProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{movie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{movie.scoresCount}</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{movie.description}</p>
        <p className="film-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {movie.starring}</strong></p>
      </div>
    </>
  );
}
