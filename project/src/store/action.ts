import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { ActionType, ChangeGenreAction, LoadFavouriteMoviesAction, LoadMoviesAction, LoadPromoMovieAction, LoadReviewsAction, LoadSameGenreMovies, LoadSingleMovieAction } from '../types/actions';
import { IMovie } from '../types/common';
import { IReviewResponse } from '../types/reviews';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const loadMovies = (movies: IMovie[]): LoadMoviesAction => ({
  type: ActionType.LoadMovies,
  payload: movies,
} as const);

export const loadSameGenreMovies = (sameMovies: IMovie[]): LoadSameGenreMovies => ({
  type: ActionType.LoadSameGenreMovies,
  payload: sameMovies,
} as const);

export const loadSingleMovie = (movie: IMovie): LoadSingleMovieAction => ({
  type: ActionType.LoadSingleMovie,
  payload: movie,
} as const);

export const loadPromoMovie = (promoMovie: IMovie): LoadPromoMovieAction => ({
  type: ActionType.LoadPromoMovie,
  payload: promoMovie,
} as const);

export const loadFavouriteMovies = (favouriteMovies: IMovie[]): LoadFavouriteMoviesAction => ({
  type: ActionType.LoadFavouriteMovies,
  payload: favouriteMovies,
} as const);

export const addFavoriteMovie = createAction(ActionType.AddFavoriteMovie);

export const removeFavoriteMovie = createAction(ActionType.RemoveFavoriteMovie);

export const loadReviews = (reviews: IReviewResponse[]): LoadReviewsAction => ({
  type: ActionType.LoadReviews,
  payload: reviews,
} as const);

export const addReview = (review: IReviewResponse) => ({
  type: ActionType.AddReview,
  payload: review,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
