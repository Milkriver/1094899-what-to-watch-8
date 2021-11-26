import { createReducer } from '@reduxjs/toolkit';
import { initialMovieCard } from '../../const';
import { MoviesData } from '../../types/state';
import {loadMovies, changeGenre, loadSingleMovie, loadActiveMovie, loadSameGenreMovies, loadPromoMovie, loadFavouriteMovies} from '../action';

const initialState: MoviesData = {
  currentGenre: 'All genres',
  movies: [],
  isDataLoaded: false,
  movie: initialMovieCard,
  sameMovies: [],
  activeMovie: initialMovieCard,
  promoMovie: initialMovieCard,
  favouriteMovies: [],
};

const moviesData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { currentGenre } = action.payload;
      state.currentGenre = currentGenre;
    })
    .addCase(loadMovies, (state, action) => {
      const { movies } = action.payload;
      state.movies = movies;
      state.isDataLoaded = movies.length !== 0;
    })
    .addCase(loadSingleMovie, (state, action) => {
      const { movie } = action.payload;
      state.movie = movie;
    })
    .addCase(loadActiveMovie, (state, action) => {
      const { activeMovie } = action.payload;
      state.movie = activeMovie;
    })
    .addCase(loadSameGenreMovies, (state, action) => {
      const { sameMovies } = action.payload;
      state.movies = sameMovies;
    })
    .addCase(loadPromoMovie, (state, action) => {
      const { promoMovie } = action.payload;
      state.movie = promoMovie;
    })
    .addCase(loadFavouriteMovies, (state, action) => {
      const { favouriteMovies } = action.payload;
      state.movies = favouriteMovies;
    });
});
export {moviesData};

