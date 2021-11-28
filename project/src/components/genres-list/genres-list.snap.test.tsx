import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { GenresList } from './genres-list';
import { IMovie } from '../../types/common';
import { configureMockStore } from '@jedmao/redux-mock-store';

const MOCK_MOVIE_1: IMovie = { id: 1, name: '', posterImage: '', previewImage: '', backgroundImage: '', backgroundColor: '', videoLink: '', previewVideoLink: '', description: '', rating: 1, scoresCount: 1, director: '', starring: ['', ''], runTime: 1, genre: '', released: 1, isFavorite: true };
const MOCK_MOVIE_2: IMovie = { id: 2, name: '', posterImage: '', previewImage: '', backgroundImage: '', backgroundColor: '', videoLink: '', previewVideoLink: '', description: '', rating: 2, scoresCount: 2, director: '', starring: ['', ''], runTime: 1, genre: '', released: 2, isFavorite: false };
const MOCK_MOVIES_ARRAY: IMovie[] = [MOCK_MOVIE_2, MOCK_MOVIE_1];

describe('Component: GenresList', () => {

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

  const MOCK_CURRENT_GENRE = 'Comedy';
  const mockFn = () => Promise.resolve();
  test('should render correctly', () => {
    const history = createMemoryHistory();
    const page = (
      <Provider store={store}>
        <Router history={history}>
          <GenresList currentGenre={MOCK_CURRENT_GENRE} movies={MOCK_MOVIES_ARRAY} onChangeGenre={mockFn} />;
        </Router>
      </Provider>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
