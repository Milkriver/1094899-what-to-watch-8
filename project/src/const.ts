export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Movies = '/films',
  SingleMovie = '/films/:id',
  SameGenreMovies = '/films/:id/similar',
  PromoMovie = '/promo',
  FavouriteMovies = '/favorite',
  StatusFavouriteMovie = '/favorite/: film_id/: status',
  Reviews = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}
