import { movies } from '../mocks/movies';
import { ActionType, ChangeGenreAction, GetMoviesAction } from '../types/actions';

export const ChangeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const GetMovies = (): GetMoviesAction => ({
  type: ActionType.GetMovies,
  payload: movies,
});
