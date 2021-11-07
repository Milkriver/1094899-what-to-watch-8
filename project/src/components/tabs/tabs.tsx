/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import reviews from '../../mocks/reviews';
import { MoviePageDetails } from '../movie-page-details/movie-page-details';
import { MoviePageOverview } from '../movie-page-overview/movie-page-overview';
import { MoviePageReviews } from '../movie-page-reviews/movie-page-reviews';

const items = [
  { title: 'Details', component: <MoviePageDetails /> },
  { title: 'Reviews', component: <MoviePageReviews reviews={reviews} /> },
  { title: 'Overview', component: <MoviePageOverview /> },
];

function Tabs() {
  const [active, setActive] = useState(null);


  // const openTab = (id: number) => setActive(id);

  return (
    <div>
      <div className="tab"></div>

    </div>
  );

}
