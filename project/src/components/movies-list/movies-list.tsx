import { MovieCardElement } from './../movie-card-element/movie-card-element';
import { movie } from '../../types/common';
import { useState } from 'react';


interface IProps {
  cards: movie[]
}


export function MoviesList({ cards }: IProps): JSX.Element {
  const [, setActiveMovieCardId] = useState<number | undefined>();
  return (
    <>
      {cards.map((singleCard) => (
        <MovieCardElement
          key={singleCard.id}
          filmName={singleCard.name}
          src={singleCard.poster_image}
          id={singleCard.id}
          onMouseOver={setActiveMovieCardId}
        />
      ))}
    </>
  );
}
