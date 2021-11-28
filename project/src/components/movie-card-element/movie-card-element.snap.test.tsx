import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MovieCardElement } from './movie-card-element';
import { configureMockStore } from '@jedmao/redux-mock-store';

const mockFn = () => Promise.resolve();
describe('Component: MovieCardElement', () => {
  const mockStore = configureMockStore();

  const store = mockStore({
    MOVIES: {},
    USER: {},
    REVIEWS: {},
  });

  store.dispatch = jest.fn();

  test('should render correctly', () => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    const page = (
      <Provider store={store}>
        <MovieCardElement activeCardId={1} onMouseOver={mockFn} filmName={'movieName'} posterSrc={'movieUrl'} id={2} videoLink={'videoLink'} />
      </Provider>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
