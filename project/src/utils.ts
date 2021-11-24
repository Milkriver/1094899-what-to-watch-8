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

export const getReviewDate = (date: string): string => {
  const dateWithoutTime = date.substring(0, 10);
  const year = dateWithoutTime.slice(0, 4);
  const day = dateWithoutTime.slice(8, 10);
  const month = dateWithoutTime.slice(5, 7);
  let monthName = '';
  switch (month) {
    case '01':
      monthName = 'January';
      break;
    case '02':
      monthName = 'February';
      break;
    case '03':
      monthName = 'March';
      break;
    case '04':
      monthName = 'April';
      break;
    case '05':
      monthName = 'May';
      break;
    case '06':
      monthName = 'June';
      break;
    case '07':
      monthName = 'July';
      break;
    case '08':
      monthName = 'August';
      break;
    case '09':
      monthName = 'September';
      break;
    case '10':
      monthName = 'October';
      break;
    case '11':
      monthName = 'November';
      break;
    case '12':
      monthName = 'December';
      break;
  }
  return `${monthName} ${day}, ${year}`;

};

