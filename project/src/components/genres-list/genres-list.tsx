import { connect, ConnectedProps } from 'react-redux';
import { changeGenre } from '../../store/action';
import { getCurrentGenre } from '../../store/movies-data/selectors';
import { ThunkAppDispatch } from '../../types/actions';
import { IMovie } from '../../types/common';
import { IState } from '../../types/state';

interface IGenresListProps {
  movies: IMovie[],
}

const mapStateToProps = (state: IState) => ({
  currentGenre: getCurrentGenre(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onChangeGenre(genre: string) {
    dispatch(changeGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IGenresListProps;


function GenresList(props: ConnectedComponentProps): JSX.Element {
  const { movies, currentGenre, onChangeGenre } = props;
  const genresList = Array.from(new Set(movies.map((movieElement) => movieElement.genre)));
  const genresListMenu = ['All genres', ...genresList];

  return (
    <ul className="catalog__genres-list">
      {genresListMenu.map((genre: string) => (
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
