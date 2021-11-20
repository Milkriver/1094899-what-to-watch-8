import { AuthorizationStatus } from '../const';
import { IMovie } from './common';
import { IReviewResponse } from './reviews';

export interface IState {
  currentGenre: string
  movies: IMovie[]
  isDataLoaded: boolean
  authorizationStatus: AuthorizationStatus,
  movie: IMovie,
  sameMovies: IMovie[],
  reviews: IReviewResponse[],
  promoMovie: IMovie,
}
