import { AuthorizationStatus } from '../const';
import { IMovie } from './common';

export interface IState {
  currentGenre: string
  movies: IMovie[]
  isDataLoaded: boolean
  authorizationStatus: AuthorizationStatus,
}
