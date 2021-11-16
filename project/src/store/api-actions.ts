import { loadMovies } from './action';
import { APIRoute } from '../const';
import { ThunkActionResult } from '../types/actions';
import { IMovie } from '../types/common';


export const fetchMovieAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<IMovie[]>(APIRoute.Movies);
    dispatch(loadMovies(data));
  };
