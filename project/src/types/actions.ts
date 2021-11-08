import { movie } from './common';

export enum ActionType {
  ChangeGenre = 'movieList/ChangeGenre',
  GetMovies = 'movieList/GetMovies',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type GetMoviesAction = {
  type: ActionType.GetMovies;
  payload: movie[];
};

export type Actions = ChangeGenreAction | GetMoviesAction;
