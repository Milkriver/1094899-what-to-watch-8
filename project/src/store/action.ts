import { AuthorizationStatus } from '../const';
import { ActionType, ChangeGenreAction, LoadMoviesAction, LoadSingleMovieAction } from '../types/actions';
import { IMovie } from '../types/common';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const loadMovies = (movies: IMovie[]): LoadMoviesAction => ({
  type: ActionType.LoadMovies,
  payload: movies,
} as const);

export const loadSingleMovie = (movie: IMovie): LoadSingleMovieAction => ({
  type: ActionType.LoadSingleMovie,
  payload: movie,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
