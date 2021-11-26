import { AuthorizationStatus, initialMovieCard } from '../const';
import { Actions, ActionType } from '../types/actions';
import { IState } from '../types/state';

const initialState: IState = {
  currentGenre: 'All genres',
  movies: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  movie: initialMovieCard,
  sameMovies: [],
  reviews: [],
  activeMovie: initialMovieCard,
  promoMovie: initialMovieCard,
  favouriteMovies: [],
  review: {
    id: 1,
    user: { id: 1, name: '' },
    rating: 1,
    comment: '',
    date: '',
  },
  userData: {
    id: 1,
    email: '',
    name: '',
    avatarUrl: '',
    token: '',
  },
};

const reducer = (state: IState = initialState, action: Actions): IState => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return { ...state, currentGenre: action.payload };
    case ActionType.LoadMovies:
      return { ...state, movies: action.payload, isDataLoaded: action.payload.length !== 0 };
    case ActionType.LoadSingleMovie:
      return { ...state, movie: action.payload };
    case ActionType.LoadActiveMovie:
      return { ...state, activeMovie: action.payload };
    case ActionType.LoadUserData:
      return { ...state, userData: action.payload };
    case ActionType.LoadSameGenreMovies:
      return { ...state, sameMovies: action.payload };
    case ActionType.LoadPromoMovie:
      return { ...state, promoMovie: action.payload };
    case ActionType.LoadFavouriteMovies:
      return { ...state, favouriteMovies: action.payload };
    case ActionType.LoadReviews:
      return { ...state, reviews: action.payload };
    case ActionType.AddReview:
      return { ...state, review: action.payload };
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    default:
      return state;
  }
};

export { reducer };
