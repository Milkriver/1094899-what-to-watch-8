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
      activeMovie: {
        id: 1, name: 'name1', posterImage: 'posterImage1', previewImage: 'previewImage1', backgroundImage: 'backgroundImage1',
        backgroundColor: 'black', videoLink: 'videoLink1', previewVideoLink: 'previewVideoLink1',
        description: 'description1', rating: 1, scoresCount: 1, director: 'director1',
        starring: ['actor1', 'actor2'], runTime: 1, genre: 'Comedy', released: 1, isFavorite: true,
      },
    },
    USER: {},
    REVIEWS: {},
  });

  HTMLMediaElement.prototype.play = jest.fn();
  HTMLMediaElement.prototype.pause = jest.fn();

  test('should render correctly', () => {
    const history = createMemoryHistory();
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
