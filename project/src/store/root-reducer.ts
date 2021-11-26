import {combineReducers} from 'redux';
import {moviesData} from './movies-data/movies-data';
// import {gameData} from './game-data/game-data';
// import {userProcess} from './user-process/user-process';

export enum NameSpace {
  movies = 'MOVIES',
  game = 'GAME',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.movies]: moviesData,
  // [NameSpace.game]: gameProcess,
  // [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
