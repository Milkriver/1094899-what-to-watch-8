import React, { useState } from 'react';


export function AddReviewForm(): JSX.Element {
  const [rating, setRating] = useState('8');
  const [reviewText, setReviewText] = useState('');
  const ratingStar = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  function handleRatingChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRating(event.currentTarget.value);
  }

  function handleReviewFormChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setReviewText(event.currentTarget.value);
  }

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratingStar.map((star) => (
            <React.Fragment key={star}>
              <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star} checked={star === Number(rating)} onChange={handleRatingChange} />
              <label className="rating__label" htmlFor={`star-${star}`} > Rating {star} </label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewText} onChange={handleReviewFormChange}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}
