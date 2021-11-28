import { render } from '@testing-library/react';
import { IMovie } from '../../types/common';
import { MoviePageDetails } from './movie-page-details';

const mockMovie1: IMovie = {
  id: 1, name: 'name1', posterImage: 'posterImage1', previewImage: 'previewImage1', backgroundImage: 'backgroundImage1',
  backgroundColor: 'black', videoLink: 'videoLink1', previewVideoLink: 'previewVideoLink1',
  description: 'description1', rating: 1, scoresCount: 1, director: 'director1',
  starring: ['actor1', 'actor2'], runTime: 1, genre: 'Comedy', released: 1, isFavorite: true,
};

describe('Component: MoviePageDetails', () => {
  test('should render correctly', () => {
    const page = <MoviePageDetails movie={mockMovie1} />;
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
