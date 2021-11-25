import { useState } from 'react';
import { IMovie } from '../../types/common';
import { IReviewResponse } from '../../types/reviews';
import { MoviePageDetails } from '../movie-page-details/movie-page-details';
import { MoviePageOverview } from '../movie-page-overview/movie-page-overview';
import { MoviePageReviews } from '../movie-page-reviews/movie-page-reviews';
interface IProps {
  movie: IMovie,
  reviews: IReviewResponse[],
}

export function Tabs({ movie, reviews }: IProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');
  const handleOverview = () => {
    setActiveTab('Overview');
  };
  const handleDetails = () => {
    setActiveTab('Details');
  };

  const handleReviews = () => {
    setActiveTab('Reviews');
  };

  const changeActiveTab = () => {
    switch (activeTab) {
      case 'Overview':
        return <MoviePageOverview movie={movie} />;
      case 'Details':
        return <MoviePageDetails movie={movie} />;
      case 'Reviews':
        return <MoviePageReviews reviews={reviews} />;
      default:
        return <MoviePageOverview movie={movie} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={activeTab === 'Overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} onClick={handleOverview}>
            <div className="film-nav__link">Overview</div>
          </li>
          <li className={activeTab === 'Details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} onClick={handleDetails}>
            <div className="film-nav__link">Details</div>
          </li>
          <li className={activeTab === 'Reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} onClick={handleReviews}>
            <div className="film-nav__link" >Reviews</div>
          </li>
        </ul >

      </nav>
      <div>
        {changeActiveTab()}
      </div>
    </div >
  );

}
