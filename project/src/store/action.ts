import { ActionType, ChangeGenreAction, LoadMoviesAction } from '../types/actions';
import { IMovie } from '../types/common';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const loadMovies = (movies: IMovie[]): LoadMoviesAction => ({
  type: ActionType.LoadMovies,
  payload: movies,
} as const);
