export class MovieModel {
  constructor(movie) {
    this.id = movie.id;
    this.title = movie.original_title;
    this.img_url = movie.poster_path;
  }
}
