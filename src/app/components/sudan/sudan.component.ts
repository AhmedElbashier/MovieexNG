import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';
import { AdminSdMoviesService } from 'src/app/service/adminsdmovieservice';
import { AdminSdPlaysService } from 'src/app/service/adminsdplayservice';
import { AdminSdTvsService } from 'src/app/service/adminsdtvservice';

@Component({
  selector: 'app-sudan',
  templateUrl: './sudan.component.html',
  styleUrls: ['./sudan.component.scss']
})
export class SudanComponent implements OnInit {
  responsiveOptions;
  loader = true;
  tvs: any;
  movies: any;
  plays: any;
  
  constructor(
    private moviesService: AdminSdMoviesService,
    private tvsService: AdminSdTvsService,
    private playsService : AdminSdPlaysService
  ) {
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
  async ngOnInit() {
    this.getMovies();
    this.getTvs();
    this.getPlays();
    this.loader = false;

  }

  async getMovies()
  {
    this.movies=await this.moviesService.getAll();
  }
  async getTvs()
  {
    this.tvs=await this.tvsService.getAll();

  }
  async getPlays()
  {
    this.plays=await this.playsService.getAll();
  }

}
