import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { ShowMoreButton } from './show-more-button';

describe('Component: ShowMoreButton', () => {
  test('should render correctly', () => {
    const history = createMemoryHistory();
    const mockFn = () => Promise.resolve();
    const page = (
      <Router history={history}>
        <ShowMoreButton checkIsButtonShowen handleShowMoreButton={mockFn} />;
      </Router>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
