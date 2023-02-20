import { Component, OnInit } from '@angular/core';
import { AdminSdPlaysService } from 'src/app/service/adminsdplayservice';

@Component({
  selector: 'app-adminsudanplay',
  templateUrl: './adminsudanplay.component.html',
  styleUrls: ['./adminsudanplay.component.scss']
})
export class AdminsudanplayComponent implements OnInit {
  Plays:any;

  
  constructor(private playService:AdminSdPlaysService) { }

   ngOnInit() {
     this.getMovie();
  }

 async getMovie()
  {
    this.Plays=await this.playService.getAll();
  }
}
