import { Component, OnInit } from '@angular/core';
import { AdminSdTvsService } from 'src/app/service/adminsdtvservice';
import { AdminTvsService } from 'src/app/service/admintvservice';

@Component({
  selector: 'app-adminsudantv',
  templateUrl: './adminsudantv.component.html',
  styleUrls: ['./adminsudantv.component.scss']
})
export class AdminsudantvComponent implements OnInit {
  Tvs:any;

  
  constructor(private tvService:AdminSdTvsService) { }

   ngOnInit() {
     this.getMovie();
  }

 async getMovie()
  {
    this.Tvs=await this.tvService.getAll();
  }
}