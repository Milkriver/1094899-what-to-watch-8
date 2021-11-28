import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { IMovie } from '../../types/common';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Tabs } from './tabs';
import { IReviewResponse } from '../../types/reviews';

const mockMovie: IMovie = {
  id: 1, name: 'name1', posterImage: 'posterImage1', previewImage: 'previewImage1', backgroundImage: 'backgroundImage1',
  backgroundColor: 'black', videoLink: 'videoLink1', previewVideoLink: 'previewVideoLink1',
  description: 'description1', rating: 1, scoresCount: 1, director: 'director1',
  starring: ['actor1', 'actor2'], runTime: 1, genre: 'Comedy', released: 1, isFavorite: true,
};
const mockReviews: IReviewResponse[] = [{ id: 1, user: { id: 1, name: 'reviewer' }, rating: 5, comment: 'cool', date: '2021-01-01T23:59:59' }];

describe('Component: Tabs', () => {

  const mockStore = configureMockStore();
  const store = mockStore({
    MOVIES: {},
    USER: {},
    REVIEWS: {},
  });

  store.dispatch = jest.fn();

  test('should render correctly', () => {
    const page = (
      <Provider store={store}>
        <Tabs
          movie={mockMovie}
          reviews={mockReviews}
        />
      </Provider>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
