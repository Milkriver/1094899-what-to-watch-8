import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { IMovie } from '../../types/common';
import { MoviePageDetails } from './movie-page-details';
import { configureMockStore } from '@jedmao/redux-mock-store';

const MOCK_MOVIE_1: IMovie = { id: 1, name: '', posterImage: '', previewImage: '', backgroundImage: '', backgroundColor: '', videoLink: '', previewVideoLink: '', description: '', rating: 1, scoresCount: 1, director: '', starring: ['1', '2'], runTime: 1, genre: '', released: 1, isFavorite: true };
describe('Component: MoviePageDetails', () => {
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
          <MoviePageDetails
            movie={MOCK_MOVIE_1}
          />;
        </Router>
      </Provider>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
