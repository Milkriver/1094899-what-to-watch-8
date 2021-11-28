import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { MainPage } from './main-page';
import { IMovie } from '../../types/common';
import { configureMockStore } from '@jedmao/redux-mock-store';

const MOCK_MOVIE_1: IMovie = { id: 1, name: '', posterImage: '', previewImage: '', backgroundImage: '', backgroundColor: '', videoLink: '', previewVideoLink: '', description: '', rating: 1, scoresCount: 1, director: '', starring: ['', ''], runTime: 1, genre: '', released: 1, isFavorite: true };
const MOCK_MOVIE_2: IMovie = { id: 2, name: '', posterImage: '', previewImage: '', backgroundImage: '', backgroundColor: '', videoLink: '', previewVideoLink: '', description: '', rating: 2, scoresCount: 2, director: '', starring: ['', ''], runTime: 1, genre: '', released: 2, isFavorite: false };
const MOCK_MOVIES_ARRAY: IMovie[] = [MOCK_MOVIE_2, MOCK_MOVIE_1];
const mockFn = () => Promise.resolve();
describe('Component: MainPage', () => {
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
          <MainPage cards={MOCK_MOVIES_ARRAY} promoMovie={MOCK_MOVIE_1} onFetchPromoMovie={mockFn} onFetchActiveMovie={mockFn} />;
        </Router>
      </Provider>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
