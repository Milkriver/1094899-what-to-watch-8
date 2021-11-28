import { render } from '@testing-library/react';
import { AddReviewForm } from './add-review-form';

describe('Component: AddReviewForm', () => {
  test('should render correctly', () => {
    const mockFn = () => Promise.resolve();
    const mockReview = {id: 1, user: {id: 1, name: ''}, rating: 1, comment: '', date: ''};
    const page = <AddReviewForm onSubmitAddReviewButton={mockFn} currentPageId={'2'} review={mockReview}/>;
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
