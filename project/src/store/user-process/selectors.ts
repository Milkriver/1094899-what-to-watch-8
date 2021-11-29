import { NameSpace } from '../root-reducer';
import { IState } from '../../types/state';
import { AuthInfo } from '../../types/auth-data';
import { AuthorizationStatus } from '../../const';

export const getLoadedUserData = (state: IState): AuthInfo => state[NameSpace.User].userData;
export const getRequiredAuthorizationData = (state: IState): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
