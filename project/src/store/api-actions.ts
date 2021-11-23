import { AuthInfo } from './../types/auth-data';
import { IMovie } from './../types/common';
import { addFavoriteMovie, addReview, loadFavouriteMovies, loadMovies, loadPromoMovie, loadReviews, loadSameGenreMovies, loadSingleMovie, loadUserData, removeFavoriteMovie, requireAuthorization, requireLogout } from './action';
import { APIRoute, AuthorizationStatus, FavoriteMoviesStatus } from '../const';
import { requireAuthorizationAction, ThunkActionResult } from '../types/actions';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { IReviewRequest, IReviewResponse } from '../types/reviews';


export const fetchMovieAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<IMovie[]>(APIRoute.Movies);
    dispatch(loadMovies(data));
  };

export const fetchSingleMovieAction = (filmId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const url = APIRoute.SingleMovie.replace(':id', filmId);
    const { data } = await api.get<IMovie>(url);
    dispatch(loadSingleMovie(data));
  };

export const fetchSameGenreMoviesAction = (filmId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const url = APIRoute.SameGenreMovies.replace(':id', filmId);
    const { data } = await api.get<IMovie[]>(url);
    dispatch(loadSameGenreMovies(data));
  };

export const fetchFavoriteMovies = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<IMovie[]>(APIRoute.FavouriteMovies);
    dispatch(loadFavouriteMovies(data));
  };

export const changeFavoriteMovies = (filmId: number, status: FavoriteMoviesStatus): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.post<IMovie>(`${APIRoute.FavouriteMovies}/${filmId}/${status}`);
    if (status === FavoriteMoviesStatus.Add) { dispatch(addFavoriteMovie()); }
    if (status === FavoriteMoviesStatus.Remove) { dispatch(removeFavoriteMovie()); }
  };

export const fetchPromoMovieAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<IMovie>(APIRoute.PromoMovie);
    dispatch(loadPromoMovie(data));
  };

export const fetchReviewsAction = (filmId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const url = APIRoute.Reviews.replace(':id', filmId);
    const { data } = await api.get<IReviewResponse[]>(url);
    dispatch(loadReviews(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get<requireAuthorizationAction>(APIRoute.Login)
      .then((resp) => {
        const auth = resp.data.payload;
        dispatch(requireAuthorization(auth));
      });
  };

export const addReviewAction = ({ rating, comment }: IReviewRequest, id: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: review } = await api.post<IReviewResponse>(APIRoute.Reviews.replace(':id', id), { rating, comment });
    dispatch(addReview(review));
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: authInfo } = await api.post<AuthInfo>(APIRoute.Login, { email, password });
    saveToken(authInfo.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadUserData(authInfo));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
