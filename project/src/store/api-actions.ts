import { loadMovies, requireAuthorization, requireLogout } from './action';
import { APIRoute, AuthorizationStatus } from '../const';
import { ThunkActionResult } from '../types/actions';
import { IMovie } from '../types/common';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken, Token } from '../services/token';


export const fetchMovieAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<IMovie[]>(APIRoute.Movies);
    dispatch(loadMovies(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: { token } } = await api.post<{ token: Token }>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
