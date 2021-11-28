import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { AuthorizationStatus } from '../../const';
import { HeaderUserBlock } from './header-user-block';

const mockAuthInfo = {
  id: 1,
  email: '',
  name: '',
  avatarUrl: '',
  token: '',
};
const mockFn = () => Promise.resolve();
describe('Component: HeaderUserBlock', () => {

  test('should render correctly', () => {
    const history = createMemoryHistory();
    const page = (
      <Router history={history}>
        <HeaderUserBlock authorizationStatus= {AuthorizationStatus.Auth} userData= {mockAuthInfo} onSubmit={mockFn}/>;
      </Router>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
