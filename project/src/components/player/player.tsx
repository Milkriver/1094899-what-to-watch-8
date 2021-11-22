import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { IMovie } from '../../types/common';
import { getMovieTime } from '../../utils';
import { Spinner } from '../spinner/spinner';
interface IProps {
  cards: IMovie[],
  activeCard: IMovie;
}
export function Player({ cards, activeCard }: IProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const id = activeCard.id.toString();
  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }
    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [activeCard.video_link]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }
    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.pause();
  }, [isPlaying]);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const timeElapsed = getMovieTime(duration - currentTime);
  const getToggler = () => (currentTime / duration * 100);
  return (

    < div className="player" >
      {videoRef.current ? ' ': <Spinner/>}
      <video
        src={activeCard.video_link}
        ref={videoRef}
        className="player__video"
        onDurationChange={(evt) => setDuration(Math.round(evt.currentTarget.duration))}
        onTimeUpdate={(evt) => setCurrentTime(Math.round(evt.currentTarget.currentTime))}
      />

      <Link to={AppRoute.Film.replace(':id', id)}><button type="button" className="player__exit">Exit</button></Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={currentTime}
              max={duration}
            />
            <div className="player__toggler" style={{ left: `${getToggler()}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{timeElapsed}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play"
            disabled={isLoading}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ?
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              :
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#play-s"></use>
              </svg>}

            {isPlaying ? <span>Play</span> : <span>Pause</span>}
          </button>
          <div className="player__name">{activeCard.name}</div>

          <button type="button" className="player__full-screen" onClick={() => videoRef.current?.requestFullscreen()}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </ div>
  );
}
