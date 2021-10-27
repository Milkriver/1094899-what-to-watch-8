import { MovieCardElement } from './../movie-card-element/movie-card-element';
import { movie } from '../../types/common';
import React from 'react';

interface IProps {
  cards: movie[]
}

export function MoviesList({ cards }: IProps): JSX.Element {

  return (
    <>
      {cards.map((singleCard) => <MovieCardElement key={singleCard.id} filmName={singleCard.name} src={singleCard.poster_image} />)}
    </>
  );
}
