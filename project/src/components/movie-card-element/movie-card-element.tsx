import { useHistory } from 'react-router';
import { AppRoute } from '../../const';
import VideoPlayer from '../videoplayer/videoplayer';

type MovieCardElementProps = {
  filmName: string
  id: number
  videolink: string
  onMouseOver: (id: number | undefined) => void
  posterSrc: string
  activeCardId: number | undefined
  genre: string
}

export function MovieCardElement({ activeCardId, onMouseOver, filmName, posterSrc, id, videolink, genre }: MovieCardElementProps): JSX.Element {
  const history = useHistory();
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => onMouseOver(id)} onMouseOut={() => onMouseOver(undefined)}>
      <div className="small-film-card__image" >
        {activeCardId === id ? <VideoPlayer posterSrc={posterSrc} videolink={videolink} /> :
          <img src={posterSrc} alt='' width="280" height="175" />};
      </div>
      <h3 className="small-film-card__title">
        <a href="/films/:id" className="small-film-card__link" onClick={() => history.push(AppRoute.Film)}>{filmName}</a>
      </h3>
    </article>
  );
}
