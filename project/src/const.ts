/* eslint-disable camelcase */
import { IMovie } from './types/common';
export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Movies = '/films',
  SingleMovie = '/films/:id',
  SameGenreMovies = '/films/:id/similar',
  PromoMovie = '/promo',
  FavouriteMovies = '/favorite',
  StatusFavouriteMovie = '/favorite/: film_id/: status',
  Reviews = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

export enum FavoriteMoviesStatus {
  Add = 1,
  Remove = 0,
}

export const initialMovieCard: IMovie = {
  id: 1,
  name: '',
  poster_image: '',
  preview_image: '',
  background_image: '',
  background_color: '',
  video_link: '',
  preview_video_link: '',
  description: '',
  rating: 1,
  scores_count: 1,
  director: '',
  starring: [],
  run_time: 1,
  genre: '',
  released: 1,
  is_favorite: false,
};

