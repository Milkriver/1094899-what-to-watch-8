import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { HeaderLogo } from './header-logo';


describe('Component: HeaderLogo', () => {

  test('should render correctly', () => {
    const history = createMemoryHistory();
    const page = (
      <Router history={history}>
        <HeaderLogo />;
      </Router>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
