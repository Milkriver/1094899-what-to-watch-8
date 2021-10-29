import { MainPage } from '../main-page/main-page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignInMessage } from '../sign-in/sign-in';
import { MyList } from '../my-list/my-list';
import { MoviePage } from '../movie-page/movie-page';
import { MoviePageReviews } from '../movie-page-reviews/movie-page-reviews';
import { Player } from '../player/player';
import { Error404 } from '../error404/error404';
import { PrivateRoute } from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { movie } from '../../types/common';

type IProps = {
  cards: movie[]
}

function App({ cards }: IProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main} >
          <MainPage cards={cards} />
        </Route>
        <Route exact path={AppRoute.SignIn}><SignInMessage /></Route>
        {/* <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        > */}
        {/* </PrivateRoute> */}
        <Route exact path={AppRoute.MyList}><MyList cards={cards}/></Route>
        <Route exact path={AppRoute.Film}><MoviePage /></Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <MoviePageReviews />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}><Player /></Route>
        <Route><Error404 /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
