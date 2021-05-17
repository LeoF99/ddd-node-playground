export default class Movie {
  private readonly id: string | null;

  private readonly name: string;

  private readonly release_year: number;

  private readonly duration_in_minutes: number;

  constructor(
    id: string | null,
    name: string,
    release_year: number,
    duration_in_minutes: number,
  ) {
    this.id = id;
    this.name = name;
    this.release_year = release_year;
    this.duration_in_minutes = duration_in_minutes;
  }

  public getId(): string | null {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getReleaseYear(): number {
    return this.release_year;
  }

  public getDurationInMinutes(): number {
    return this.duration_in_minutes;
  }
}
