import { combineReducers } from 'redux';
import { moviesData } from './movies-data/movies-data';
import { reviewsData } from './reviews-data/reviews-data';
import { userProcess } from './user-process/user-process';


export enum NameSpace {
  movies = 'MOVIES',
  user = 'USER',
  reviews = 'REVIEWS'
}

export const rootReducer = combineReducers({
  [NameSpace.movies]: moviesData,
  [NameSpace.user]: userProcess,
  [NameSpace.reviews]: reviewsData,
});

export type RootState = ReturnType<typeof rootReducer>;
