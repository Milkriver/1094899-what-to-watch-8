import { useHistory } from 'react-router';
import { AppRoute } from '../../const';

type MovieCardElementProps = {
  filmName: string,
  src: string,
  id: number,
  onMouseOver: (id: number | undefined) => void
}

export function MovieCardElement({ filmName, src, id, onMouseOver }: MovieCardElementProps): JSX.Element {
  const history = useHistory();
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => onMouseOver(id)} onMouseOut={() => onMouseOver(undefined)}>
      <div className="small-film-card__image">
        <img src={src} alt={filmName} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" onClick={() => history.push(AppRoute.MyList)}>{filmName}</a>
      </h3>
      <div>{id}</div>
    </article>
  );
}
