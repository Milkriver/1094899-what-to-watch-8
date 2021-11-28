import { render } from '@testing-library/react';
import { GenresList } from './genres-list';
import { IMovie } from '../../types/common';

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

describe('Component: GenresList', () => {
  test('should render correctly', () => {
    const mockGenre = 'Comedy';
    const mockFn = () => Promise.resolve();
    const page = <GenresList currentGenre={mockGenre} movies={mockMovies} onChangeGenre={mockFn} />;
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
