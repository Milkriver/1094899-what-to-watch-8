import { createReducer } from '@reduxjs/toolkit';
import { ReviewsData } from '../../types/state';
import { loadReviews, addReview } from '../action';

const initialState: ReviewsData = {
  reviews: [],
  review: {
    id: 1,
    user: { id: 1, name: '' },
    rating: 1,
    comment: '',
    date: '',
  },
};

const reviewsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviews, (state, action) => {
      const { reviews } = action.payload;
      state.reviews = reviews;
    })
    .addCase(addReview, (state, action) => {
      const { review } = action.payload;
      state.review = review;
    });
});
export { reviewsData };


