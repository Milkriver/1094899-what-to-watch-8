import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AuthorizationStatus } from '../const';
import { IMovie } from './common';
import { IState } from './state';

export enum ActionType {
  ChangeGenre = 'movieList/ChangeGenre',
  LoadMovies = 'movieList/LoadMovies',
  LoadSingleMovie = 'movieCard/LoadSingleMovie',
  LoadSameGenreMovies = 'movieCard/LoadSameGenreMovies',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type LoadMoviesAction = {
  type: ActionType.LoadMovies;
  payload: IMovie[];
};

export type LoadSingleMovieAction = {
  type: ActionType.LoadSingleMovie;
  payload: IMovie;
};

export type LoadSameGenreMovies = {
  type: ActionType.LoadSameGenreMovies;
  payload: IMovie[];
};

export type requireAuthorizationAction = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus;
};

export type requireLogoutAction = {
  type: ActionType.RequireLogout;
};


export type Actions = ChangeGenreAction | LoadMoviesAction | LoadSingleMovieAction | LoadSameGenreMovies | requireAuthorizationAction | requireLogoutAction;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, IState, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<IState, AxiosInstance, Actions>;
