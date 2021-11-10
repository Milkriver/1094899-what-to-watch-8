import { MovieCardElement } from './../movie-card-element/movie-card-element';
import { movie } from '../../types/common';
import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';


interface IProps {
  cards: movie[],
  changeLimit: (arg: number) => void,
  moviesShowingLimit: number,
}

const mapStateToProps = ({ currentGenre }: State) => ({
  currentGenre,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IProps;

function MoviesList(props: ConnectedComponentProps): JSX.Element {

  const { cards, currentGenre, changeLimit, moviesShowingLimit } = props;
  const [activeCardId, setActiveMovieCardId] = useState<number | undefined>();
  const handleActiveCard = (id: number | undefined) => {
    setActiveMovieCardId(id);
  };
  const filtredCards = cards.filter((card) => card.genre === currentGenre || currentGenre === 'All genres');
  changeLimit(filtredCards.length);
  return (
    <>
      {filtredCards.slice(0, moviesShowingLimit).map((singleCard) => (
        <MovieCardElement
          key={singleCard.id}
          activeCardId={activeCardId}
          filmName={singleCard.name}
          id={singleCard.id}
          onMouseOver={handleActiveCard}
          videolink={singleCard.preview_video_link}
          posterSrc={singleCard.preview_image}
          genre={singleCard.genre}
        />
      ))}
    </>
  );
}
export { MoviesList };
export default connector(MoviesList);
