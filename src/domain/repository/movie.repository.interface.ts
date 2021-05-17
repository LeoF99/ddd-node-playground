import Movie from '../models/movie.model';

export default interface IMovieRepository {
  list(): Promise<Array<Movie>>;
  findById(id: string): Promise<Movie>;
  save(
    name: string,
    release_year: number,
    duration_in_minutes: number,
  ): Promise<Movie>;
  delete(id: string): Promise<Movie>;
}
