import { render } from '@testing-library/react';
import { ShowMoreButton } from './show-more-button';

describe('Component: ShowMoreButton', () => {
  test('should render correctly', () => {
    const mockFn = () => Promise.resolve();
    const page = <ShowMoreButton checkIsButtonShowen handleShowMoreButton={mockFn} />;
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
