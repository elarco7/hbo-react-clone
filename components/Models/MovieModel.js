export class MovieModel {
  constructor(movie) {
    this.id = movie.id;
    this.title = movie.original_title;
    this.img_url = movie.poster_path;
    this.poster_url = movie.backdrop_path;
    this.media_type = movie.media_type;
    this.genre_ids = movie.genre_ids;
    this.isVideo = movie.video;
  }
}
