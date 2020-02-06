import { ALL_MOVIES } from './../model/allmovies';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: Movie[] = ALL_MOVIES;
  private movie: Movie = {};
  private movie$ = new BehaviorSubject(this.movie);
  private loader$ = new BehaviorSubject(true);
  constructor() {

  }
  private async delay(millis: number): Promise<void> {
    return await new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async getAll(): Promise<string[]> {
    this.setLoader(true);
    await this.delay(1000);
    this.setLoader(false);
    return this.movies.map( movie => movie.caption );
  }

  async getDetails(caption: string): Promise<Movie> {
    await this.delay(1000);
    return this.movies.find( movie => movie.caption === caption);
  }
   getMovie(): Observable<Movie> {
    return this.movie$.asObservable();
  }
  async setMovie(movie) {
    this.setLoader(true);
    await this.delay(1000);
    this.setLoader(false);
    this.movie$.next(this.movies.find( m => m.caption === movie));
  }
  getLoader(): Observable<boolean> {
    return this.loader$.asObservable();
  }
  setLoader(loader) {
    this.loader$.next(loader);
  }
}
