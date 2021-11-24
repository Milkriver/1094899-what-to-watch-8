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
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  previewVideoLink: '',
  description: '',
  rating: 1,
  scoresCount: 1,
  director: '',
  starring: [],
  runTime: 1,
  genre: '',
  released: 1,
  isFavorite: false,
};

