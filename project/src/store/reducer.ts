/* eslint-disable camelcase */
import { AuthorizationStatus } from '../const';
import { Actions, ActionType } from '../types/actions';
import { IState } from '../types/state';

const initialState: IState = {
  currentGenre: 'All genres',
  movies: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  movie: {
    id: 1,
    name: '',
    poster_image: '',
    preview_image: '',
    background_image: '',
    background_color: '',
    video_link: '',
    preview_video_link: '',
    description: '',
    rating: 1,
    scores_count: 1,
    director: '',
    starring: [],
    run_time: 1,
    genre: '',
    released: 1,
    is_favorite: false,
  },
  sameMovies: [],
  reviews: [],
};

const reducer = (state: IState = initialState, action: Actions): IState => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return { ...state, currentGenre: action.payload };
    case ActionType.LoadMovies:
      return { ...state, movies: action.payload, isDataLoaded: action.payload.length !== 0 };
    case ActionType.LoadSingleMovie:
      return { ...state, movie: action.payload };
    case ActionType.LoadSameGenreMovies:
      return { ...state, sameMovies: action.payload };
    case ActionType.LoadReviews:
      return {...state, reviews: action.payload};
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    default:
      return state;
  }
};

export { reducer };
