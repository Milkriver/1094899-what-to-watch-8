import { movies } from '../mocks/movies';
import { ActionType, ChangeGenreAction, GetMoviesAction } from '../types/actions';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getMovies = (): GetMoviesAction => ({
  type: ActionType.GetMovies,
  payload: movies,
});

