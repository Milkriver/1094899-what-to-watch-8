import {NameSpace} from '../root-reducer';
import {IState} from '../../types/state';



export const getQuestions = (state: IState): Questions => state[NameSpace.data].questions;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
