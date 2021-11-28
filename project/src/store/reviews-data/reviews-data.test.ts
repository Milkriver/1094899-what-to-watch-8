import { ActionType } from '../../types/actions';
import { IReviewResponse } from '../../types/reviews';
import { reviewsData } from './reviews-data';

const mockInitialReview: IReviewResponse = { id: 1, user: { id: 1, name: 'reviewer' }, rating: 5, comment: 'cool', date: '2021-01-01T23:59:59' };

describe('Reducer: reviewsData', () => {
  it('should show loaded reviews', () => {
    const state = {
      reviews: [],
      review: mockInitialReview,
    };

    const loadReviewsAction = {
      type: ActionType.LoadReviews,
      payload: {
        reviews: [],
      },
    };
    expect(reviewsData(state, loadReviewsAction))
      .toEqual({
        reviews: [],
        review: mockInitialReview,
      });
  });
  it('should show added review', () => {
    const state = {
      reviews: [],
      review: mockInitialReview,
    };

    const addReviewAction = {
      type: ActionType.AddReview,
      payload: {
        review: mockInitialReview,
      },
    };
    expect(reviewsData(state, addReviewAction))
      .toEqual({
        reviews: [],
        review: mockInitialReview,
      });
  });
});
