import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { Footer } from './footer';


describe('Component: Footer', () => {
  const history = createMemoryHistory();
  const page = (
    <Router history={history}>
      <Footer />;
    </Router>
  );
  test('should render correctly', () => {
    const {container} = render(page);
    expect(container).toMatchSnapshot();
  });
});

