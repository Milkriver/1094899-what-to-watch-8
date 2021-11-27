
import { Middleware } from 'redux';
import { IState } from '../../types/state';
import { ActionType } from '../../types/actions';
import browserHistory from '../../components/browser-hystory';


export const redirect: Middleware<unknown, IState> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
