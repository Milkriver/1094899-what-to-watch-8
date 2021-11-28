import { render } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import Player from './player';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';


describe('Component: Player', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    MOVIES: {
      movie: {
        id: 1, name: '', posterImage: '', previewImage: '', backgroundImage: '',
        backgroundColor: '', videoLink: '', previewVideoLink: '', description: '', rating: 1, scoresCount: 1, director: '', starring: ['', ''],
        runTime: 1, genre: '', released: 1, isFavorite: true,
      },
      activeMovie: {
        id: 1, name: '', posterImage: '', previewImage: '', backgroundImage: '',
        backgroundColor: '', videoLink: '', previewVideoLink: '', description: '', rating: 1, scoresCount: 1, director: '', starring: ['', ''],
        runTime: 1, genre: '', released: 1, isFavorite: true,
      },
    },
    USER: {},
    REVIEWS: {},
  });

  HTMLMediaElement.prototype.play = jest.fn();
  HTMLMediaElement.prototype.pause = jest.fn();
  const history = createMemoryHistory();
  test('should render correctly', () => {
    const page = (
      <Provider store={store}>
        <Router history={history}>
          <Player />
        </Router>
      </Provider>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
