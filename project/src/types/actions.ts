import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IState } from './state';

export enum ActionType {
  ChangeGenre = 'movieList/ChangeGenre',
  LoadMovies = 'movieList/LoadMovies',
  LoadSingleMovie = 'movieCard/LoadSingleMovie',
  LoadActiveMovie = 'movieCard/LoadActiveMovie',
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

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, IState, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<IState, AxiosInstance, Action>;
