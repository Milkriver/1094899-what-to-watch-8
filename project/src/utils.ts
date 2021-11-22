export const getMovieStarRating = (rating: string | number): string => {
  rating = Number(rating);
  if (rating < 3) {
    return 'Bad';
  } else if (rating < 5) {
    return 'Normal';
  } else if (rating < 8) {
    return 'Good';
  } else if (rating < 10) {
    return 'Very Good';
  } else {
    return 'Awesome';
  }
};

export const getMovieTime = (time: number): string => {
  const minutes = Math.floor(Math.floor(time) / 60);
  const hours = Math.floor(minutes / 60);
  const seconds = Math.floor(Math.floor(time) - minutes * 60);
  let minutesTimer = String(minutes % 60);
  let secondsTimer = String(seconds);


  if (Number(minutesTimer) < 10) {
    minutesTimer = `0${minutesTimer}`;
  }
  if (seconds < 10) {
    secondsTimer = `0${secondsTimer}`;
  }
  return hours > 0 ?
    `- ${hours}:${minutesTimer}:${secondsTimer}`
    :
    `- ${minutesTimer}:${secondsTimer}`;
};

