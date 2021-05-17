import traceability from 'traceability';
import Movie from '../models/movie.model';
import IMovieRepository from '../repository/movie.repository.interface';

const { Logger } = traceability;

export default class MovieService {
  private readonly repository: IMovieRepository;

  constructor(movieRepository: IMovieRepository) {
    this.repository = movieRepository;
  }

  async list() {
    const movies: Array<Movie> = await this.repository.list();

    return movies;
  }

  async findById(id: string) {
    const movie: Movie = await this.findById(id);

    if (!movie) {
      Logger.info('Movie not found!', {
        location: 'movieService.findById',
        data: {
          id,
        },
      });
    }

    return movie;
  }

  async save(name: string, release_year: number, duration_in_minutes: number) {
    const movie: Movie = await this.repository.save(
      name,
      release_year,
      duration_in_minutes,
    );

    Logger.info('Movie created!', {
      location: 'movieService.save',
      data: {
        id: movie.getId(),
      },
    });

    return movie;
  }

  async delete(id: string) {
    const movie: Movie = await this.repository.delete(id);

    Logger.info('Movie deleted!', {
      location: 'movieService.delete',
      data: {
        id,
      },
    });

    return movie;
  }
}
