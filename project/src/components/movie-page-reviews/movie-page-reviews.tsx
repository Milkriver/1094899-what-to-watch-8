import React from 'react';
import { IReview } from '../../types/reviews';

interface IProps {
  reviews: IReview[],
}

export function MoviePageReviews({ reviews }: IProps): JSX.Element {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => {
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.text}</p>
              <footer className="review__details">
                <cite className="review__author">{review.author}</cite>
                <time className="review__date" dateTime="2016-12-24">{review.date}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.rating}</div>
          </div>;
        },
        )}


        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews[0].text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews[0].author}</cite>
              <time className="review__date" dateTime="2016-12-24">{reviews[0].date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews[0].rating}</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews[1].text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews[1].author}</cite>
              <time className="review__date" dateTime="2015-11-18">{reviews[1].date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews[1].rating}</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews[2].text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews[2].author}</cite>
              <time className="review__date" dateTime="2015-11-18">{reviews[2].date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews[2].rating}</div>
        </div>
      </div>
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews[3].text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews[3].author}</cite>
              <time className="review__date" dateTime="2016-12-20">{reviews[3].date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews[3].rating}</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews[4].text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews[4].author}</cite>
              <time className="review__date" dateTime="2016-12-20">{reviews[4].date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews[4].rating}</div>
        </div>

        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">{reviews[5].text}</p>

            <footer className="review__details">
              <cite className="review__author">{reviews[5].author}</cite>
              <time className="review__date" dateTime="2016-12-20">{reviews[5].date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{reviews[5].rating}</div>
        </div>
      </div>
    </div >
  );
}
