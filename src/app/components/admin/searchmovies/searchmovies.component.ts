import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';
import { AdminMoviesService } from 'src/app/service/adminmovieservice';

@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.scss']
})
export class SearchMoviesComponent implements OnInit {
  topRated: any;
  responsiveOptions;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: any;
  searchStr: string;
  movie:any;
  constructor(private movieService: AdminMoviesService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit() {
    this.movie = this.getAllMovies();
  }

  getAllMovies() {
    this.movieService.getAllMovies().pipe(delay(2000)).subscribe((res: any) => {
      this.topRated = res.results;
      this.totalResults = res.total_results;
      this.loader = false;
    },
    error => console.log(error));
  }

  changePage(event) {
    this.loader = true;
    // this.getTopRatedMovies();
  }

  searchMovies() {
    this.movieService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
      this.loader = false;

    });
  }


}
