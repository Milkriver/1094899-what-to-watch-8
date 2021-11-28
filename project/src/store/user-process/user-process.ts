import { AuthorizationStatus } from './../../const';
import { createReducer } from '@reduxjs/toolkit';
import { IUserProcess } from '../../types/state';
import { loadUserData, requireAuthorization, requireLogout } from '../action';

const initialState: IUserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {
    id: 1,
    email: '',
    name: '',
    avatarUrl: '',
    token: '',
  },
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUserData, (state, action) => {
      const { userData } = action.payload;
      state.userData = userData;
    })
    .addCase(requireAuthorization, (state, action) => {
      const { authorizationStatus } = action.payload;
      state.authorizationStatus = authorizationStatus;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

export { userProcess };
