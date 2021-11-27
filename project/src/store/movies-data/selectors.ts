import { NameSpace } from '../root-reducer';
import { IState } from '../../types/state';
import { IMovie } from '../../types/common';

export const getCurrentGenre = (state: IState): string => state[NameSpace.movies].currentGenre;
export const getLoadedMovies = (state: IState): IMovie[] => state[NameSpace.movies].movies;
export const getSingleMovie = (state: IState): IMovie => state[NameSpace.movies].movie;
export const getActiveMovie = (state: IState): IMovie => state[NameSpace.movies].activeMovie;
export const getSameGenreMovies = (state: IState): IMovie[] => state[NameSpace.movies].sameMovies;
export const getPromoMovie = (state: IState): IMovie => state[NameSpace.movies].promoMovie;
export const getFavouriteMovies = (state: IState): IMovie[] => state[NameSpace.movies].favouriteMovies;

