import { render } from '@testing-library/react';
import { MoviePageReviews } from './movie-page-reviews';
import { IReviewResponse } from '../../types/reviews';


const mockReviews: IReviewResponse[] = [{ id: 1, user: { id: 1, name: 'reviewer' }, rating: 5, comment: 'cool', date: '2021-01-01T23:59:59' }];

describe('Component: MoviePageReviews', () => {
  test('should render correctly', () => {
    const page = <MoviePageReviews reviews={mockReviews}/>;
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
