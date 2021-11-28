import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from './services/api';
import { configureMockStore, MockStoreCreator } from '@jedmao/redux-mock-store';
import { IState } from './types/state';
import { Action } from 'redux';
import { AxiosInstance } from 'axios';

interface IFakeInfrastructure {
  mockAPI: MockAdapter
  mockStore: MockStoreCreator<
    IState,
    Action,
    ThunkDispatch<IState, AxiosInstance, Action>
  >
}

export const makeFakeInfrastructure = (): IFakeInfrastructure => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore: MockStoreCreator<
    IState,
    Action,
    ThunkDispatch<IState, AxiosInstance, Action>
  > = configureMockStore(middlewares);

  mockAPI
    .onAny()
    .reply(200, {});

  return {
    mockAPI,
    mockStore,
  };
};
