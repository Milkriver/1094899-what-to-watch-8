import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { changeGenre } from '../../store/action';
import { Actions } from '../../types/actions';
import { IMovie } from '../../types/common';
import { IState } from '../../types/state';

interface IGenresListProps {
  movies: IMovie[],
}

const mapStateToProps = ({ currentGenre }: IState) => ({
  currentGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeGenre(genre: string) {
    dispatch(changeGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IGenresListProps;


function GenresList(props: ConnectedComponentProps): JSX.Element {
  const { movies, currentGenre, onChangeGenre } = props;
  const genreList = Array.from(new Set(movies.map((movieElement) => movieElement.genre)));
  const genreListMenu = ['All genres', ...genreList];

  return (
    <ul className="catalog__genres-list">
      {genreListMenu.map((genre: string) => (
        <li className={currentGenre === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
          key={genre}
        >
          <div className="catalog__genres-link " onClick={() => onChangeGenre(genre)}>
            {genre}
          </div>
        </li>
      ))}
    </ul>

  );
}
export { GenresList };
export default connector(GenresList);
