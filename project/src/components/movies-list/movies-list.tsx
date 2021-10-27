import { MovieCardElement } from './../movie-card-element/movie-card-element';


type MoviesListProps = {
  filmName: string,
  src: string,
}

export function MoviesList({filmName, src}: MoviesListProps): JSX.Element {
  return (
    MovieCardElement({filmName, src})
  );
}
