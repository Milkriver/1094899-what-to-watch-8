import MainPage from '../main-page/main-page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import Player from '../player/player';
import { Error404 } from '../error404/error404';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { connect, ConnectedProps } from 'react-redux';
import { Spinner } from '../spinner/spinner';
import { IState } from '../../types/state';
import AddReviewPage from '../add-review-page/add-review-page';
import { Redirect } from 'react-router';
import { getLoadedMovies } from '../../store/movies-data/selectors';
import { getRequiredAuthorizationData } from '../../store/user-process/selectors';

const mapStateToProps = (state: IState) => ({
  movies:getLoadedMovies(state),
  isDataLoaded: getLoadedMovies(state),
  authorizationStatus: getRequiredAuthorizationData(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const { isDataLoaded, movies, authorizationStatus } = props;
  if (!isDataLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main} >
          <MainPage cards={movies} />
        </Route>
        <Route exact path={AppRoute.SignIn}>  {authorizationStatus === AuthorizationStatus.Auth ? <Redirect to='/' /> : <SignIn />}</Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}><MoviePage /></Route>

        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewPage />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}><Player /></Route>
        <Route><Error404 /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export { App };
export default connector(App);
