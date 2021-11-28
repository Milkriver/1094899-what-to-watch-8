import {render} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { Error404 } from './error404';


describe('Component: Error404', () => {
  const history = createMemoryHistory();
  const page = (
    <Router history={history}>
      <Error404 />;
    </Router>
  );
  test('should render correctly', () => {
    const {container} = render(page);
    expect(container).toMatchSnapshot();
  });
});

