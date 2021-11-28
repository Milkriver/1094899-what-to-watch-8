import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { AddReviewForm } from './add-review-form';

describe('Component: AddReviewForm', () => {
  test('should render correctly', () => {
    const history = createMemoryHistory();
    const mockFn = () => Promise.resolve();
    const mockReview =  {id: 1, user: {id: 1, name: ''}, rating: 1, comment: '', date: ''};
    const page = (
      <Router history={history}>
        <AddReviewForm onSubmitAddReviewButton={mockFn} currentPageId={'2'} review={mockReview}/>;
      </Router>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
