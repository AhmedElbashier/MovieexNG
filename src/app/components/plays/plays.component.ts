import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';
import { AdminPlaysService } from 'src/app/service/adminplayservice';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.scss']
})
export class PlaysComponent implements OnInit {
  Plays: any;
  responsiveOptions;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: any;
  searchStr: string;

  constructor(private adminService:AdminPlaysService) { 
  this.responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
  async ngOnInit() {
    this.getAllPlays();
    
  }

  async getAllPlays()
  {
    this.Plays = await this.adminService.getAll();
    this.loader = false;
  }
}
