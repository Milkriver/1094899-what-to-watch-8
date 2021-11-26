import { MovieCardElement } from './../movie-card-element/movie-card-element';
import { IMovie } from '../../types/common';
import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IState } from '../../types/state';


interface IProps {
  cards: IMovie[],
  changeLimit: (arg: number) => void,
  moviesShowingLimit: number,
}

const mapStateToProps = ({ currentGenre }: IState) => ({
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
  useEffect(() => {
    changeLimit(filtredCards.length);
  }, [filtredCards.length, changeLimit]);

  return (
    <>
      {filtredCards.slice(0, moviesShowingLimit).map((singleCard) => (
        <MovieCardElement
          key={singleCard.id}
          activeCardId={activeCardId}
          filmName={singleCard.name}
          id={singleCard.id}
          onMouseOver={handleActiveCard}
          videoLink={singleCard.previewVideoLink}
          posterSrc={singleCard.previewImage}
        />
      ))}
    </>
  );
}
export { MoviesList };
export default connector(MoviesList);
