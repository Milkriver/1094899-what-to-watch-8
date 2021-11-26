import { AuthorizationStatus } from '../const';
import { RootState } from '../store/root-reducer';
import { AuthInfo } from './auth-data';
import { IMovie } from './common';
import { IReviewResponse } from './reviews';
export interface MoviesData {
  currentGenre: string
  movies: IMovie[]
  isDataLoaded: boolean
  activeMovie:  IMovie,
  movie: IMovie,
  sameMovies: IMovie[],
  favouriteMovies: IMovie[],
  promoMovie: IMovie,
}

export interface ReviewsData {
  reviews: IReviewResponse[],
  review: IReviewResponse,
}

export interface UserProcess {
  authorizationStatus: AuthorizationStatus,
  userData: AuthInfo,
}
export type IState = RootState;
