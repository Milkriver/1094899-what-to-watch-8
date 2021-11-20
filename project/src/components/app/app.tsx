import MainPage from '../main-page/main-page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignInMessage from '../sign-in/sign-in';
import { MyList } from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import { Player } from '../player/player';
import { Error404 } from '../error404/error404';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';
import { connect, ConnectedProps } from 'react-redux';
import { Spinner } from '../spinner/spinner';
import { IState } from '../../types/state';
import AddReviewPage from '../add-review-page/add-review-page';


const mapStateToProps = ({ isDataLoaded, movies, authorizationStatus }: IState) => ({
  movies,
  isDataLoaded,
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const { isDataLoaded, movies } = props;
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
        <Route exact path={AppRoute.SignIn}><SignInMessage /></Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList cards={movies} />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}><MoviePage /></Route>

        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewPage />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}><Player cards={movies} /></Route>
        <Route><Error404 /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export { App };
export default connector(App);
