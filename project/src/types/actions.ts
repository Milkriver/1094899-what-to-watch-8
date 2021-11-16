import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IMovie } from './common';
import { IState } from './state';

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

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, IState, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<IState, AxiosInstance, Actions>;
