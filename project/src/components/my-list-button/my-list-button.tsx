import { useEffect, useState } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { AppRoute, AuthorizationStatus, FavoriteMoviesStatus } from '../../const';
import { changeFavoriteMovies, fetchFavoriteMovies } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/actions';
import { IMovie } from '../../types/common';
import { IState } from '../../types/state';

type IProps = {
  currentMovie: IMovie,
}


const mapStateToProps = ({ authorizationStatus }: IState) => ({
  authorizationStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onChangeFavoriteMovies(cardId: number, status: FavoriteMoviesStatus) {
    dispatch(changeFavoriteMovies(cardId, status));
    dispatch(fetchFavoriteMovies());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IProps;

function MyListButton({ currentMovie, authorizationStatus }: ConnectedComponentProps): JSX.Element {
  const [favouriteMovieStatus, setFavouriteMovieStatus] = useState(currentMovie.isFavorite);
  const currentMovieId = currentMovie.id;
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => setFavouriteMovieStatus(currentMovie?.isFavorite), [currentMovie]);
  const onHandleFavoriteMovieClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(changeFavoriteMovies(currentMovieId, favouriteMovieStatus ? FavoriteMoviesStatus.Remove : FavoriteMoviesStatus.Add));
      setFavouriteMovieStatus(!favouriteMovieStatus);
      history.push(AppRoute.MyList);
    } else {
      history.push(AppRoute.SignIn);
    }
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={onHandleFavoriteMovieClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={favouriteMovieStatus ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}
export { MyListButton };
export default connector(MyListButton);
