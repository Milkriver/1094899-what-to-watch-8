import { useHistory } from 'react-router';
import { AppRoute } from '../../const';
import VideoPlayer from '../videoplayer/videoplayer';

interface IProps {
  filmName: string
  id: number
  videolink: string
  onMouseOver: (id: number | undefined) => void
  posterSrc: string
  activeCardId: number | undefined
}

export function MovieCardElement({ activeCardId, onMouseOver, filmName, posterSrc, id, videolink }: IProps): JSX.Element {
  const history = useHistory();
  const onClick = () => {
    if (activeCardId === undefined) {
      return;
    }
    const url = AppRoute.Film.replace(':id', activeCardId.toString());
    history.push(url);
  };
  return (
    <article className="small-film-card catalog__films-card" onClick={onClick} onMouseEnter={() => onMouseOver(id)} onMouseOut={() => onMouseOver(undefined)}>
      <div className="small-film-card__image" >
        {activeCardId === id ? <VideoPlayer posterSrc={posterSrc} videolink={videolink} /> :
          <img src={posterSrc} alt='' width="280" height="175" />};
      </div>
      <h3 className="small-film-card__title">
        <div className="small-film-card__link">{filmName}</div>
      </h3>
    </article>
  );
}

