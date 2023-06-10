export class SeriesModel {
  constructor(series) {
    this.id = series.id;
    this.title = series.original_name;
    this.img_url = series.poster_path;
    this.genre_ids = series.genre_ids;
    this.media_type = series.media_type;
    this.poster_url = series.backdrop_path;
  }
}
