import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { AppRoute } from '../../const';
import { ChangeGenre } from '../../store/action';
import { movie } from '../../types/common';
import { State } from '../../types/state';

interface IGenresListProps {
  movies: movie[],
}

const mapStateToProps = ({ currentGenre }: State) => ({
  currentGenre: currentGenre,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeGenre(genre: string) {
    dispatch(ChangeGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IGenresListProps;


export function GenresList(GenresListProps: ConnectedComponentProps): JSX.Element {
  const movies = GenresListProps.movies;
  const GenreList = Array.from(new Set(movies.map((movieElement) => movieElement.genre)));
  const GenreListMenu = ['All genres', ...GenreList];
  return (
    <ul className="catalog__genres-list">
      {GenreListMenu.map((genre: string) => (
        <li className="catalog__genres-item" key={genre}>
          <Link to={AppRoute.Main} className="catalog__genres-link">
            {genre}
          </Link>
        </li>
      ))}
    </ul>

  );
}

export default connector(GenresList);
