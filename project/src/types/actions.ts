import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AuthorizationStatus } from '../const';
import { AuthInfo } from './auth-data';
import { IMovie } from './common';
import { IReviewResponse } from './reviews';
import { IState } from './state';

export enum ActionType {
  ChangeGenre = 'movieList/ChangeGenre',
  LoadMovies = 'movieList/LoadMovies',
  LoadSingleMovie = 'movieCard/LoadSingleMovie',
  LoadSameGenreMovies = 'movieCard/LoadSameGenreMovies',
  LoadPromoMovie = 'movieCard/LoadPromoMovie',
  LoadFavouriteMovies = 'userList/LoadFavouriteMovies',
  AddFavoriteMovie = 'userList/AddFavoriteMovie',
  RemoveFavoriteMovie = 'userList/RemoveFavoriteMovie',
  LoadReviews = 'movieCard/LoadReviews',
  AddReview = 'movieCard/AddReview',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadUserData = 'user/loadUserData',
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

export type LoadPromoMovieAction = {
  type: ActionType.LoadPromoMovie;
  payload: IMovie;
};

export type LoadUserDataAction = {
  type: ActionType.LoadUserData;
  payload: AuthInfo;
};

export type LoadFavouriteMoviesAction = {
  type: ActionType.LoadFavouriteMovies,
  payload: IMovie[],
};

export type AddFavoriteMovieAction = {
  type: ActionType.AddFavoriteMovie,
};

export type RemoveFavoriteMovieAction = {
  type: ActionType.RemoveFavoriteMovie,
};

export type LoadReviewsAction = {
  type: ActionType.LoadReviews;
  payload: IReviewResponse[];
};

export type AddReviewAction = {
  type: ActionType.AddReview;
  payload: IReviewResponse;
};

export type requireAuthorizationAction = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus;
};

export type requireLogOutAction = {
  type: ActionType.RequireLogout;
};


export type Actions = ChangeGenreAction | LoadMoviesAction | LoadSingleMovieAction | LoadUserDataAction | LoadFavouriteMoviesAction | AddFavoriteMovieAction |  RemoveFavoriteMovieAction | AddReviewAction | LoadSameGenreMovies | LoadPromoMovieAction | LoadReviewsAction | requireAuthorizationAction | requireLogOutAction;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, IState, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<IState, AxiosInstance, Actions>;
