import { AuthorizationStatus } from '../const';
import { RootState } from '../store/root-reducer';
import { AuthInfo } from './auth-data';
import { IMovie } from './common';
import { IReviewResponse } from './reviews';
export interface IMoviesData {
  currentGenre: string
  movies: IMovie[]
  isDataLoaded: boolean
  activeMovie:  IMovie,
  movie: IMovie,
  sameMovies: IMovie[],
  favouriteMovies: IMovie[],
  promoMovie: IMovie,
}

export interface IReviewsData {
  reviews: IReviewResponse[],
  review: IReviewResponse,
}

export interface IUserProcess {
  authorizationStatus: AuthorizationStatus,
  userData: AuthInfo,
}
export type IState = RootState;
