import { MovieCardElement } from './../movie-card-element/movie-card-element';
import { movie } from '../../types/common';
import { useState } from 'react';


interface IProps {
  cards: movie[]
}

export function MoviesList({ cards }: IProps): JSX.Element {
  const [activeCardId, setActiveMovieCardId] = useState<number | undefined>();
  const handleActiveCard = (id: number | undefined) => {
    setActiveMovieCardId(id);
  };
  return (
    <>
      {cards.map((singleCard) => (
        <MovieCardElement
          key={singleCard.id}
          activeCardId={activeCardId}
          filmName={singleCard.name}
          id={singleCard.id}
          onMouseOver={handleActiveCard}
          videolink={singleCard.preview_video_link}
          posterSrc={singleCard.preview_image}
        />
      ))}
    </>
  );
}
