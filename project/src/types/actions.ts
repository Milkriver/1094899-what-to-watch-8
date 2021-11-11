import { IMovie } from './common';

export enum ActionType {
  ChangeGenre = 'movieList/ChangeGenre',
  LoadMovies = 'movieList/LoadMovies'
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type LoadMoviesAction = {
  type: ActionType.LoadMovies;
  payload: IMovie[];
};

export type Actions = ChangeGenreAction | LoadMoviesAction;
