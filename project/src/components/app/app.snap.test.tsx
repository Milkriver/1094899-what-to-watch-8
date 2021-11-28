import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import App from './app';

describe('Component: App', () => {

  const mockStore = configureMockStore();
  const store = mockStore({
    MOVIES: {},
    USER: {},
    REVIEWS: {},
  });

  store.dispatch = jest.fn();

  test('should render correctly', () => {
    const page = (
      <Provider store={store}>
        <App />;
      </Provider>
    );
    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
