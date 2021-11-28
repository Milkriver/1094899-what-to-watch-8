import { IMovie } from './../../types/common';
import { initialMovieCard } from './../../const';
import { ActionType } from '../../types/actions';
import { IMoviesData } from '../../types/state';
import { moviesData } from './movies-data';

const mockCurrentGenre = 'Comedy';
const mockEmptyMovies: IMovie[] = [];
const mockMovie1: IMovie = {
  id: 1, name: 'name1', posterImage: 'posterImage1', previewImage: 'previewImage1', backgroundImage: 'backgroundImage1',
  backgroundColor: 'black', videoLink: 'videoLink1', previewVideoLink: 'previewVideoLink1',
  description: 'description1', rating: 1, scoresCount: 1, director: 'director1',
  starring: ['actor1', 'actor2'], runTime: 1, genre: 'Comedy', released: 1, isFavorite: true,
};

const mockMovie2: IMovie = {
  id: 2, name: 'name2', posterImage: 'posterImage2', previewImage: 'previewImage2', backgroundImage: 'backgroundImage2',
  backgroundColor: 'black', videoLink: 'videoLink2', previewVideoLink: 'previewVideoLink2',
  description: 'description2', rating: 2, scoresCount: 2, director: 'director2',
  starring: ['actor1', 'actor2'], runTime: 2, genre: 'Comedy', released: 2, isFavorite: true,
};

const mockMovies: IMovie[] = [mockMovie2, mockMovie1];

const mockInitialState: IMoviesData = {
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
    const state = mockInitialState;

    const changeGenre = {
      type: ActionType.ChangeGenre,
      payload: { currentGenre: mockCurrentGenre },
    };
    expect(moviesData(state, changeGenre))
      .toEqual({
        currentGenre: mockCurrentGenre,
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
    const state = mockInitialState;
    const loadMovies = {
      type: ActionType.LoadMovies,
      payload: { movies: mockEmptyMovies },
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
    const state = mockInitialState;
    const loadMovies = {
      type: ActionType.LoadMovies,
      payload: { movies: mockMovies },
    };
    expect(moviesData(state, loadMovies))
      .toEqual({
        currentGenre: 'All genres',
        movies: mockMovies,
        isDataLoaded: true,
        movie: initialMovieCard,
        sameMovies: [],
        activeMovie: initialMovieCard,
        promoMovie: initialMovieCard,
        favouriteMovies: [],
      });
  });
  it('should load 1 movie', () => {
    const state = mockInitialState;
    const loadSingleMovieAction = {
      type: ActionType.LoadSingleMovie,
      payload: { movie: mockMovie1 },
    };
    expect(moviesData(state, loadSingleMovieAction))
      .toEqual({
        currentGenre: 'All genres',
        movies: [],
        isDataLoaded: false,
        movie: mockMovie1,
        sameMovies: [],
        activeMovie: initialMovieCard,
        promoMovie: initialMovieCard,
        favouriteMovies: [],
      });
  });
  it('should load activeMovie', () => {
    const state = mockInitialState;
    const loadActiveMovieAction = {
      type: ActionType.LoadActiveMovie,
      payload: { activeMovie: mockMovie1 },
    };
    expect(moviesData(state, loadActiveMovieAction))
      .toEqual({
        currentGenre: 'All genres',
        movies: [],
        isDataLoaded: false,
        movie: initialMovieCard,
        sameMovies: [],
        activeMovie: mockMovie1,
        promoMovie: initialMovieCard,
        favouriteMovies: [],
      });
  });
  it('should load same ganres movies', () => {
    const state = mockInitialState;
    const loadSameGenreMoviesAction = {
      type: ActionType.LoadSameGenreMovies,
      payload: { sameMovies: mockMovies },
    };
    expect(moviesData(state, loadSameGenreMoviesAction))
      .toEqual({
        currentGenre: 'All genres',
        movies: [],
        isDataLoaded: false,
        movie: initialMovieCard,
        sameMovies: mockMovies,
        activeMovie: initialMovieCard,
        promoMovie: initialMovieCard,
        favouriteMovies: [],
      });
  });
  it('should load promomovie', () => {
    const state = mockInitialState;
    const loadPromoMovieAction = {
      type: ActionType.LoadPromoMovie,
      payload: { promoMovie: mockMovie1 },
    };
    expect(moviesData(state, loadPromoMovieAction))
      .toEqual({
        currentGenre: 'All genres',
        movies: [],
        isDataLoaded: false,
        movie: initialMovieCard,
        sameMovies: [],
        activeMovie: initialMovieCard,
        promoMovie: mockMovie1,
        favouriteMovies: [],
      });
  });
  it('should load favorite movies', () => {
    const state = mockInitialState;
    const loadFavouriteMoviesAction = {
      type: ActionType.LoadFavouriteMovies,
      payload: { favouriteMovies: mockMovies },
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
        favouriteMovies: mockMovies,
      });
  });
});
