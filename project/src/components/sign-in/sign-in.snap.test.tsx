import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { SignIn } from './sign-in';


describe('Component: SingIn', () => {
  test('should render correctly', () => {
    const history = createMemoryHistory();
    const mockFn = () => Promise.resolve();
    const page =(
      <Router history={history}>
        <SignIn onSubmit={mockFn} />;
      </Router>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
