import { useRef, useEffect, useState } from 'react';


type AudioPlayerProps = {
  posterSrc: string
  videoLink: string
}

function VideoPlayer({ posterSrc, videoLink }: AudioPlayerProps): JSX.Element | null {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
      setIsPlaying(false);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      try {
        videoRef.current.play();
        return;
      } catch {
        setIsPlaying(false);
      }
    }

    videoRef.current.pause();
  }, [isPlaying, videoRef]);

  return (
    isPlaying ? (
      <video
        width='280'
        height='200'
        ref={videoRef}
        muted
        poster={posterSrc}
      ><source src={videoLink} type="video/mp4" />
      </video>
    ) : null
  );
}

export default VideoPlayer;
