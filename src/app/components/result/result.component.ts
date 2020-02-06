import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  movie: Movie = {};
  loader: boolean;
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    // spinner
    this.moviesService.getLoader().subscribe((res) => this.loader = res);
    // click listener
    this.moviesService.getMovie().subscribe( result => { this.movie = result; });
  }

}
