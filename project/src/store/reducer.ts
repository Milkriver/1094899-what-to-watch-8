import { AuthorizationStatus } from '../const';
import { Actions, ActionType } from '../types/actions';
import { IState } from '../types/state';

const initialState: IState = {
  currentGenre: 'All genres',
  movies: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = (state: IState = initialState, action: Actions): IState => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return { ...state, currentGenre: action.payload };
    case ActionType.LoadMovies:
      return { ...state, movies: action.payload, isDataLoaded: action.payload.length !== 0 };
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload, isDataLoaded: true };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    default:
      return state;
  }
};

export { reducer };
