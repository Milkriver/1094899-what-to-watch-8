import { NameSpace } from '../root-reducer';
import { IState } from '../../types/state';
import { IReviewResponse } from '../../types/reviews';

export const getLoadedReviews = (state: IState): IReviewResponse[] => state[NameSpace.Reviews].reviews;
export const getAddedReview = (state: IState): IReviewResponse => state[NameSpace.Reviews].review;

