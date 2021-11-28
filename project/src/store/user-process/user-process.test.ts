import { userProcess } from './user-process';
import { AuthorizationStatus } from '../../const';
import { ActionType } from '../../types/actions';


const mockInitialUser = {
  id: 1, email: '', name: '', avatarUrl: '', token: '',
};
describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(
        {
          authorizationStatus: AuthorizationStatus.Unknown,
          userData: mockInitialUser,
        });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: mockInitialUser,
    };
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    };
    expect(userProcess(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        userData: mockInitialUser,
      });

  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: mockInitialUser,
    };

    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    };
    const actualResult = userProcess(state, requiredAuthorizationAction);
    const expectedResult = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: mockInitialUser,
    };
    expect(actualResult).toEqual(expectedResult);
  });

  it('should logout and update authorizationStatus to "NO_AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData: mockInitialUser,
    };
    const requireLogoutAction = {
      type: ActionType.RequireLogout,
      payload: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    };
    expect(userProcess(state, requireLogoutAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: mockInitialUser,
      });
  });
});
