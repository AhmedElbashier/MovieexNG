import { Component, OnInit } from '@angular/core';
import { AdminMoviesService } from 'src/app/service/adminmovieservice';

@Component({
  selector: 'app-moviescatalouge',
  templateUrl: './moviescatalouge.component.html',
  styleUrls: ['./moviescatalouge.component.scss']
})
export class MoviesCatalougeComponent implements OnInit {
  Movies: any;
  topRated: any;
  responsiveOptions;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: any;
  searchStr: string;

  constructor(private adminService:AdminMoviesService) { 
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
    this.getAllMovies();
    
  }

  getAllMovies()
  {
    this.adminService.getAllMovies().subscribe((res) => {
      this.Movies = res;
      this.loader = false;

    });
  }
}
