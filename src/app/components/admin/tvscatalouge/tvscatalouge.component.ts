import { Component, OnInit } from '@angular/core';
import { AdminTvsService } from 'src/app/service/admintvservice';

@Component({
  selector: 'app-tvscatalouge',
  templateUrl: './tvscatalouge.component.html',
  styleUrls: ['./tvscatalouge.component.scss']
})
export class TvsCatalougeComponent implements OnInit {
  Tvs: any;
  responsiveOptions;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: any;
  searchStr: string;

  constructor(private adminService:AdminTvsService) { 
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
    this.getAllTvs();
    
  }

  getAllTvs()
  {
    this.adminService.getAllTvs().subscribe((res) => {
      this.Tvs = res;
      this.loader = false;

    });
  }
}
