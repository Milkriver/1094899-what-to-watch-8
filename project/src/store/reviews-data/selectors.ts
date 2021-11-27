import { NameSpace } from '../root-reducer';
import { IState } from '../../types/state';
import { IReviewRequest, IReviewResponse } from '../../types/reviews';

export const getLoadedReviews = (state: IState): IReviewRequest[] => state[NameSpace.reviews].reviews;
export const getAddedReview = (state: IState): IReviewResponse => state[NameSpace.reviews].review;

