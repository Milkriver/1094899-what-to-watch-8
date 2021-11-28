import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { MainPage } from './main-page';
import { IMovie } from '../../types/common';
import { configureMockStore } from '@jedmao/redux-mock-store';

const mockMovie1: IMovie = {
  id: 1, name: 'name1', posterImage: 'posterImage1', previewImage: 'previewImage1', backgroundImage: 'backgroundImage1',
  backgroundColor: 'black', videoLink: 'videoLink1', previewVideoLink: 'previewVideoLink1',
  description: 'description1', rating: 1, scoresCount: 1, director: 'director1',
  starring: ['actor1', 'actor2'], runTime: 1, genre: 'Comedy', released: 1, isFavorite: true,
};

const mockMovie2: IMovie = {
  id: 2, name: 'name2', posterImage: 'posterImage2', previewImage: 'previewImage2', backgroundImage: 'backgroundImage2',
  backgroundColor: 'black', videoLink: 'videoLink2', previewVideoLink: 'previewVideoLink2',
  description: 'description2', rating: 2, scoresCount: 2, director: 'director2',
  starring: ['actor1', 'actor2'], runTime: 2, genre: 'Comedy', released: 2, isFavorite: true,
};

const mockMovies: IMovie[] = [mockMovie2, mockMovie1];
const mockFn = () => Promise.resolve();

describe('Component: MainPage', () => {
  const mockStore = configureMockStore();

  const store = mockStore({
    MOVIES: {},
    USER: {},
    REVIEWS: {},
  });

  store.dispatch = jest.fn();

  test('should render correctly', () => {
    const history = createMemoryHistory();
    const page = (
      <Provider store={store}>
        <Router history={history}>
          <MainPage cards={mockMovies} promoMovie={mockMovie1} onFetchPromoMovie={mockFn} onFetchActiveMovie={mockFn} />;
        </Router>
      </Provider>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
