import { AuthorizationStatus } from '../const';
import { AuthInfo } from './auth-data';
import { IMovie } from './common';
import { IReviewResponse } from './reviews';

export interface IState {
  currentGenre: string
  movies: IMovie[]
  isDataLoaded: boolean
  activeMovie:  IMovie,
  authorizationStatus: AuthorizationStatus,
  movie: IMovie,
  sameMovies: IMovie[],
  favouriteMovies: IMovie[],
  reviews: IReviewResponse[],
  promoMovie: IMovie,
  review: IReviewResponse,
  userData: AuthInfo,
}
