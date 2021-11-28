import { ActionType } from '../../types/actions';
import { reviewsData } from './reviews-data';

const DEFAULT_REVIEW = {
  id: 1, user: { id: 1, name: '' }, rating: 1, comment: '', date: '',
};
describe('Reducer: reviewsData', () => {
  it('should show loaded reviews', () => {
    const state = {
      reviews: [],
      review: DEFAULT_REVIEW,
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
        review: DEFAULT_REVIEW,
      });
  });
  it('should show added review', () => {
    const state = {
      reviews: [],
      review: DEFAULT_REVIEW,
    };

    const addReviewAction = {
      type: ActionType.AddReview,
      payload: {
        review: DEFAULT_REVIEW,
      },
    };
    expect(reviewsData(state, addReviewAction))
      .toEqual({
        reviews: [],
        review: DEFAULT_REVIEW,
      });
  });
});
