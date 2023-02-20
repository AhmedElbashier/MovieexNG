import { Component, OnInit } from '@angular/core';
import { AdminSdMoviesService } from 'src/app/service/adminsdmovieservice';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-adminsudanmovie',
  templateUrl: './adminsudanmovie.component.html',
  styleUrls: ['./adminsudanmovie.component.scss'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
})
export class AdminsudanmovieComponent implements OnInit {
  Movies:any;

  
  constructor(private movieService:AdminSdMoviesService) { }

   ngOnInit() {
     this.getMovie();
  }

 async getMovie()
  {
    this.Movies=await this.movieService.getAll();
  }
}
