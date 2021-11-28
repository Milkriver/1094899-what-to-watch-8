import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { MovieCardElement } from './movie-card-element';
import { configureMockStore } from '@jedmao/redux-mock-store';

const mockFn = () => Promise.resolve();
describe('Component: MovieCardElement', () => {
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
    window.HTMLMediaElement.prototype.play = jest.fn();
    const history = createMemoryHistory();
    const page = (
      <Provider store={store}>
        <Router history={history}>
          <MovieCardElement activeCardId={1} onMouseOver={mockFn} filmName={'movieName'} posterSrc={'movieUrl'} id={2} videoLink={'videoLink'} />;
        </Router>
      </Provider>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
