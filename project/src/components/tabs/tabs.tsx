import { useState } from 'react';
import reviews from '../../mocks/reviews';
import { MoviePageDetails } from '../movie-page-details/movie-page-details';
import { MoviePageOverview } from '../movie-page-overview/movie-page-overview';
import { MoviePageReviews } from '../movie-page-reviews/movie-page-reviews';

export function Tabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };

  const handleTab3 = () => {
    setActiveTab('tab3');
  };

  const singleActiveTab = () => {
    switch (activeTab) {
      case 'tab1':
        return <MoviePageOverview />;
      case 'tab2':
        return <MoviePageDetails />;
      case 'tab3':
        return <MoviePageReviews reviews={reviews} />;
      default:
        return <MoviePageOverview />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={activeTab === 'tab1' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} onClick={handleTab1}>
            <div className="film-nav__link">Overview</div>
          </li>
          <li className={activeTab === 'tab2' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} onClick={handleTab2}>
            <div className="film-nav__link">Details</div>
          </li>
          <li className={activeTab === 'tab3' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} onClick={handleTab3}>
            <div className="film-nav__link" >Reviews</div>
          </li>
        </ul >

      </nav>
      <div>
        {singleActiveTab()}
      </div>
    </div >
  );

}
