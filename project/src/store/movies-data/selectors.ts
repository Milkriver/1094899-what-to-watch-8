import { NameSpace } from '../root-reducer';
import { IState } from '../../types/state';
import { IMovie } from '../../types/common';

export const getCurrentGenre = (state: IState): string => state[NameSpace.Movies].currentGenre;
export const getLoadedMovies = (state: IState): IMovie[] => state[NameSpace.Movies].movies;
export const getSingleMovie = (state: IState): IMovie => state[NameSpace.Movies].movie;
export const getActiveMovie = (state: IState): IMovie => state[NameSpace.Movies].activeMovie;
export const getSameGenreMovies = (state: IState): IMovie[] => state[NameSpace.Movies].sameMovies;
export const getPromoMovie = (state: IState): IMovie => state[NameSpace.Movies].promoMovie;
export const getFavouriteMovies = (state: IState): IMovie[] => state[NameSpace.Movies].favouriteMovies;

