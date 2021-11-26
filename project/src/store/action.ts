import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { ActionType } from '../types/actions';
import { AuthInfo } from '../types/auth-data';
import { IMovie } from '../types/common';
import { IReviewResponse } from '../types/reviews';

export const changeGenre = createAction(ActionType.ChangeGenre, (currentGenre: string) => ({ payload: { currentGenre } }));
export const loadMovies = createAction(ActionType.LoadMovies, (movies: IMovie[]) => ({ payload: { movies } }));
export const loadSameGenreMovies = createAction(ActionType.LoadSameGenreMovies, (sameMovies: IMovie[]) => ({ payload: { sameMovies } }));
export const loadSingleMovie = createAction(ActionType.LoadSingleMovie, (movie: IMovie) => ({ payload: { movie } }));
export const loadActiveMovie = createAction(ActionType.LoadActiveMovie, (activeMovie: IMovie) => ({ payload: { activeMovie } }));
export const loadPromoMovie = createAction(ActionType.LoadPromoMovie, (promoMovie: IMovie) => ({ payload: { promoMovie } }));
export const loadUserData = createAction(ActionType.LoadUserData, (userData: AuthInfo) => ({ payload: { userData } }));
export const loadFavouriteMovies = createAction(ActionType.LoadFavouriteMovies, (favouriteMovies: IMovie[]) => ({ payload: { favouriteMovies } }));
export const addFavoriteMovie = createAction(ActionType.AddFavoriteMovie);
export const removeFavoriteMovie = createAction(ActionType.RemoveFavoriteMovie);
export const loadReviews = createAction(ActionType.LoadReviews, (reviews: IReviewResponse[]) => ({ payload: { reviews } }));
export const addReview = createAction(ActionType.AddReview, (review: IReviewResponse) => ({ payload: { review } }));
export const requireAuthorization = createAction(ActionType.RequireAuthorization, (authStatus: AuthorizationStatus) => ({ payload: { authStatus } }));
export const requireLogout = createAction(ActionType.RequireLogout);

