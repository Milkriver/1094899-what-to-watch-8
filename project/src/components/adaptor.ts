import { IMovie, IMovieResponse } from './../types/common';

export const adaptMovie = (externalMovie: IMovieResponse): IMovie => ({
  id: externalMovie.id,
  name: externalMovie.name,
  posterImage: externalMovie.poster_image,
  previewImage: externalMovie.preview_image,
  backgroundImage: externalMovie.background_image,
  backgroundColor: externalMovie.background_color,
  videoLink: externalMovie.video_link,
  previewVideoLink: externalMovie.preview_video_link,
  description: externalMovie.description,
  rating: externalMovie.rating,
  scoresCount: externalMovie.scores_count,
  director: externalMovie.director,
  starring: externalMovie.starring,
  runTime: externalMovie.run_time,
  genre: externalMovie.genre,
  released: externalMovie.released,
  isFavorite: externalMovie.is_favorite,
});

