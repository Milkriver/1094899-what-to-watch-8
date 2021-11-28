import { IMovie } from './../../types/common';
import { initialMovieCard } from './../../const';
import { ActionType } from '../../types/actions';
import { IMoviesData } from '../../types/state';
import { moviesData } from './movies-data';

const MOCK__CURRENT_GENRE = 'Comedy';
const MOCK__EMPTY_MOVIES_ARRAY: IMovie[] = [];
const MOCK__MOVIE_1: IMovie = { id: 1, name: '', posterImage: '', previewImage: '', backgroundImage: '', backgroundColor: '', videoLink: '', previewVideoLink: '', description: '', rating: 1, scoresCount: 1, director: '', starring: ['', ''], runTime: 1, genre: '', released: 1, isFavorite: true };
const MOCK__MOVIE_2: IMovie = { id: 2, name: '', posterImage: '', previewImage: '', backgroundImage: '', backgroundColor: '', videoLink: '', previewVideoLink: '', description: '', rating: 2, scoresCount: 2, director: '', starring: ['', ''], runTime: 1, genre: '', released: 2, isFavorite: false };
const MOCK__MOVIES_ARRAY: IMovie[] = [MOCK__MOVIE_2, MOCK__MOVIE_1];
const INITIAL_STATE: IMoviesData = {
  currentGenre: 'All genres',
  movies: [],
  isDataLoaded: false,
  movie: initialMovieCard,
  sameMovies: [],
  activeMovie: initialMovieCard,
  promoMovie: initialMovieCard,
  favouriteMovies: [],
};

describe('Reducer: moviesData', () => {
  it('should change current genre', () => {
    const state = INITIAL_STATE;

    const changeGenre = {
      type: ActionType.ChangeGenre,
      payload: { currentGenre: MOCK__CURRENT_GENRE },
    };
    expect(moviesData(state, changeGenre))
      .toEqual({
        currentGenre: MOCK__CURRENT_GENRE,
        movies: [],
        isDataLoaded: false,
        movie: initialMovieCard,
        sameMovies: [],
        activeMovie: initialMovieCard,
        promoMovie: initialMovieCard,
        favouriteMovies: [],
      });
  });
  it('should load 0 movies and return false value of isDataLoaded', () => {
    const state = INITIAL_STATE;
    const loadMovies = {
      type: ActionType.LoadMovies,
      payload: { movies: MOCK__EMPTY_MOVIES_ARRAY },
    };
    expect(moviesData(state, loadMovies))
      .toEqual({
        currentGenre: 'All genres',
        movies: [],
        isDataLoaded: false,
        movie: initialMovieCard,
        sameMovies: [],
        activeMovie: initialMovieCard,
        promoMovie: initialMovieCard,
        favouriteMovies: [],
      });
  });
  it('should load 1 movie and return true value of isDataLoaded', () => {
    const state = INITIAL_STATE;
    const loadMovies = {
      type: ActionType.LoadMovies,
      payload: { movies: MOCK__MOVIES_ARRAY },
    };
    expect(moviesData(state, loadMovies))
      .toEqual({
        currentGenre: 'All genres',
        movies: MOCK__MOVIES_ARRAY,
        isDataLoaded: true,
        movie: initialMovieCard,
        sameMovies: [],
        activeMovie: initialMovieCard,
        promoMovie: initialMovieCard,
        favouriteMovies: [],
      });
  });
  it('should load 1 movie', () => {
    const state = INITIAL_STATE;
    const loadSingleMovieAction = {
      type: ActionType.LoadSingleMovie,
      payload: { movie: MOCK__MOVIE_1 },
    };
    expect(moviesData(state, loadSingleMovieAction))
      .toEqual({
        currentGenre: 'All genres',
        movies: [],
        isDataLoaded: false,
        movie: MOCK__MOVIE_1,
        sameMovies: [],
        activeMovie: initialMovieCard,
        promoMovie: initialMovieCard,
        favouriteMovies: [],
      });
  });
  it('should load activeMovie', () => {
    const state = INITIAL_STATE;
    const loadActiveMovieAction = {
      type: ActionType.LoadActiveMovie,
      payload: { activeMovie: MOCK__MOVIE_1 },
    };
    expect(moviesData(state, loadActiveMovieAction))
      .toEqual({
        currentGenre: 'All genres',
        movies: [],
        isDataLoaded: false,
        movie: initialMovieCard,
        sameMovies: [],
        activeMovie: MOCK__MOVIE_1,
        promoMovie: initialMovieCard,
        favouriteMovies: [],
      });
  });
  it('should load same ganres movies', () => {
    const state = INITIAL_STATE;
    const loadSameGenreMoviesAction = {
      type: ActionType.LoadSameGenreMovies,
      payload: { sameMovies: MOCK__MOVIES_ARRAY },
    };
    expect(moviesData(state, loadSameGenreMoviesAction))
      .toEqual({
        currentGenre: 'All genres',
        movies: [],
        isDataLoaded: false,
        movie: initialMovieCard,
        sameMovies: MOCK__MOVIES_ARRAY,
        activeMovie: initialMovieCard,
        promoMovie: initialMovieCard,
        favouriteMovies: [],
      });
  });
  it('should load promomovie', () => {
    const state = INITIAL_STATE;
    const loadPromoMovieAction = {
      type: ActionType.LoadPromoMovie,
      payload: { promoMovie: MOCK__MOVIE_1 },
    };
    expect(moviesData(state, loadPromoMovieAction))
      .toEqual({
        currentGenre: 'All genres',
        movies: [],
        isDataLoaded: false,
        movie: initialMovieCard,
        sameMovies: [],
        activeMovie: initialMovieCard,
        promoMovie: MOCK__MOVIE_1,
        favouriteMovies: [],
      });
  });
  it('should load favorite movies', () => {
    const state = INITIAL_STATE;
    const loadFavouriteMoviesAction = {
      type: ActionType.LoadFavouriteMovies,
      payload: { favouriteMovies: MOCK__MOVIES_ARRAY },
    };
    expect(moviesData(state, loadFavouriteMoviesAction))
      .toEqual({
        currentGenre: 'All genres',
        movies: [],
        isDataLoaded: false,
        movie: initialMovieCard,
        sameMovies: [],
        activeMovie: initialMovieCard,
        promoMovie: initialMovieCard,
        favouriteMovies: MOCK__MOVIES_ARRAY,
      });
  });
});
