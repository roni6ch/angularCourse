import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  movies: string[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getAll().then(res => this.movies = res);
  }

  getDetails(caption) {
    this.moviesService.setMovie(caption);
    }

}
