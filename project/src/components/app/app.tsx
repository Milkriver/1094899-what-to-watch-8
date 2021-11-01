import { MainPage } from '../main-page/main-page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignInMessage } from '../sign-in/sign-in';
import { MyList } from '../my-list/my-list';
import { MoviePage } from '../movie-page/movie-page';
// import { MoviePageReviews } from '../movie-page-reviews/movie-page-reviews';
import { Player } from '../player/player';
import { Error404 } from '../error404/error404';
import { PrivateRoute } from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { movie } from '../../types/common';
import { IReview } from '../../types/reviews';
import { AddReviewForm } from '../add-review-form/add-review-form';

interface IProps {
  cards: movie[],
  reviews: IReview[],
}

function App({ cards, reviews}: IProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main} >
          <MainPage cards={cards} />
        </Route>
        <Route exact path={AppRoute.SignIn}><SignInMessage /></Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList cards={cards} />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}><MoviePage /></Route>
        <Route exact path={AppRoute.AddReview}><AddReviewForm /></Route>
        {/* <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <MoviePageReviews reviews={reviews}/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute> */}
        <Route exact path={AppRoute.Player}><Player cards={cards} /></Route>
        <Route><Error404 /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
