import { combineReducers } from 'redux';
import { moviesData } from './movies-data/movies-data';
import { reviewsData } from './reviews-data/reviews-data';
import { userProcess } from './user-process/user-process';


export enum NameSpace {
  Movies = 'MOVIES',
  User = 'USER',
  Reviews = 'REVIEWS'
}

export const rootReducer = combineReducers({
  [NameSpace.Movies]: moviesData,
  [NameSpace.User]: userProcess,
  [NameSpace.Reviews]: reviewsData,
});

export type RootState = ReturnType<typeof rootReducer>;
