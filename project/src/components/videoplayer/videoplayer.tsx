/* eslint-disable no-console */
import React from 'react';
import { useRef, useEffect, useState } from 'react';


type AudioPlayerProps = {
  isPlaying: boolean
  posterSrc: string
  videolink: string
}

function VideoPlayer({ posterSrc, videolink, isPlaying }: AudioPlayerProps): JSX.Element {
  const [, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

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
  }, []);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.pause();
  }, [isPlaying, videoRef]);

  return (
    <video
      width='280'
      height='200'
      ref={videoRef}
      muted
      poster={posterSrc}
    ><source src={videolink} type="video/mp4" />
    </video>
  );
}

export default VideoPlayer;
