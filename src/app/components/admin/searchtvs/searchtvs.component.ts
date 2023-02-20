import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';
import { AdminTvsService } from 'src/app/service/admintvservice';

@Component({
  selector: 'app-searchtvs',
  templateUrl: './searchtvs.component.html',
  styleUrls: ['./searchtvs.component.scss']
})
export class SearchTvsComponent implements OnInit {

  topRated: any;
  responsiveOptions;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: any;
  searchStr: string;

  constructor(private movieService: AdminTvsService) {
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
  }

  getTopRatedMovies(page: number) {
    this.movieService.getTopRatedTvs(page).pipe(delay(2000)).subscribe((res: any) => {
      this.topRated = res.results;
      this.totalResults = res.total_results;
      this.loader = false;
    },
    error => console.log(error));
  }

  changePage(event) {
    this.loader = true;
    this.getTopRatedMovies(event.pageIndex + 1);
  }

  searchMovies() {
    this.movieService.searchTvs(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
      this.loader = false;

    });
  }


}
