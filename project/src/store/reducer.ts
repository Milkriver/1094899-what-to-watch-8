import { movies } from '../mocks/movies';
import { Actions, ActionType } from '../types/actions';
import { State } from '../types/state';

const initialState: State = {
  currentGenre: 'All genres',
  movies: movies,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return { ...state, currentGenre: action.payload };
    case ActionType.GetMovies:
      return { ...state, movies: action.payload };

    default:
      return state;
  }
};

export { reducer };
