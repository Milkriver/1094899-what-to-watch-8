import { useRef, useEffect, useState } from 'react';


type AudioPlayerProps = {
  posterSrc: string
  videolink: string
}

function VideoPlayer({ posterSrc, videolink }: AudioPlayerProps): JSX.Element | null {
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
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [isPlaying, videoRef]);

  return (
    isPlaying ? (
      <video
        width='280'
        height='200'
        ref={videoRef}
        muted
        poster={posterSrc}
      ><source src={videolink} type="video/mp4" />
      </video>
    ) : null
  );
}

export default VideoPlayer;
