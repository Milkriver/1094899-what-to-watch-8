import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThunkAppDispatch } from './types/actions';
import { fetchMovieAction } from './store/api-actions';
import { createAPI } from './services/api';
import thunk from 'redux-thunk';

const api = createAPI(
  //Авторизация будет в дз 7.2
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => { },
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(fetchMovieAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
