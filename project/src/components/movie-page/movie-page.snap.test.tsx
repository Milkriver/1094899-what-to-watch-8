import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { IMovie } from '../../types/common';
import { MoviePage } from './movie-page';
import { AuthorizationStatus } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';

const MOCK_MOVIE_1: IMovie = { id: 1, name: '', posterImage: '', previewImage: '', backgroundImage: '', backgroundColor: '', videoLink: '', previewVideoLink: '', description: '', rating: 1, scoresCount: 1, director: '', starring: ['', ''], runTime: 1, genre: '', released: 1, isFavorite: true };
const MOCK_MOVIE_2: IMovie = { id: 2, name: '', posterImage: '', previewImage: '', backgroundImage: '', backgroundColor: '', videoLink: '', previewVideoLink: '', description: '', rating: 2, scoresCount: 2, director: '', starring: ['', ''], runTime: 1, genre: '', released: 2, isFavorite: false };
const MOCK_MOVIES_ARRAY: IMovie[] = [MOCK_MOVIE_2, MOCK_MOVIE_1];
const MOCK_REVIEWS = [{ id: 1, user: { id: 1, name: '' }, rating: 5, comment: '', date: '' }];

const mockFn = () => Promise.resolve();
describe('Component: MoviePage', () => {
  const mockStore = configureMockStore();

  const store = mockStore({
    MOVIES: {
      movie: {
        id: 1, name: '', posterImage: '', previewImage: '', backgroundImage: '',
        backgroundColor: '', videoLink: '', previewVideoLink: '', description: '', rating: 1, scoresCount: 1, director: '', starring: ['', ''],
        runTime: 1, genre: '', released: 1, isFavorite: true,
      },
    },
    USER: {},
    REVIEWS: {},
  });

  store.dispatch = jest.fn();

  test('should render correctly', () => {
    const history = createMemoryHistory();
    const page = (
      <Provider store={store}>
        <Router history={history}>
          <MoviePage
            sameMovies={MOCK_MOVIES_ARRAY}
            reviews={MOCK_REVIEWS}
            onFetchMovie={mockFn}
            onFetchSameGenreMovies={mockFn}
            onFetchReviews={mockFn}
            onFetchActiveMovie={mockFn}
            movie={MOCK_MOVIE_1}
            authorizationStatus={AuthorizationStatus.Auth}
          />;
        </Router>
      </Provider>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
