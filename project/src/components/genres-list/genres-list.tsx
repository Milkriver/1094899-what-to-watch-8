import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { ChangeGenre } from '../../store/action';
import { Actions } from '../../types/actions';
import { movie } from '../../types/common';
import { State } from '../../types/state';

interface IGenresListProps {
  movies: movie[],
}

const mapStateToProps = ({ currentGenre }: State) => ({
  currentGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeGenre(genre: string) {
    dispatch(ChangeGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IGenresListProps;


function GenresList(props: ConnectedComponentProps): JSX.Element {
  const { movies, currentGenre, onChangeGenre } = props;
  const GenreList = Array.from(new Set(movies.map((movieElement) => movieElement.genre)));
  const GenreListMenu = ['All genres', ...GenreList];

  return (
    <ul className="catalog__genres-list">
      {GenreListMenu.map((genre: string) => (
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
