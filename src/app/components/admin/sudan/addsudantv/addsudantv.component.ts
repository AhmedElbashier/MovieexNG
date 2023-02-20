import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RootObject } from 'src/app/service/adminmovieservice';
import { AdminSdMoviesService, SdMovie } from 'src/app/service/adminsdmovieservice';
import { AdminSdTvsService } from 'src/app/service/adminsdtvservice';
import { AdminTvsService } from 'src/app/service/admintvservice';
import { NgxImageCompressService } from "ngx-image-compress";

@Component({
  selector: 'app-addsudantv',
  templateUrl: './addsudantv.component.html',
  styleUrls: ['./addsudantv.component.scss']
})
export class AddsudantvComponent implements OnInit {
  baseUrl = "https://www.youtube.com/embed/";
  autoplay = "?rel=0;&autoplay=1&mute=0";
  movie:any;
  backdrop_pathResultBeforeCompress: string;
  backdrop_pathResultAfterCompress: string;
  posterResultBeforeCompress: string;
  posterResultAfterCompress: string;
  backdrop_path:string;
  poster:string;


    constructor(private movieService:AdminSdTvsService,private imageCompress: NgxImageCompressService) { }

  ngOnInit() {
  }
  
  addToSystem(title:any,storyline:any,release_date:any,runtime:any,revenue:any,budget:any,genre:any,status:any,backdrop_path:any,poster:any,vote:any,video:any,language:any,cast:any)
  {
    this.movie={
      title: title,
      overview:storyline,
      release_date:release_date,
      runtime:runtime,
      budget:budget,
      revenue:revenue,
      genre:genre,
      status:status,
      vote_average:vote,
      video:video,
      language:language,
      poster:this.poster,
      backdrop_path:this.backdrop_path,
      cast:cast,
    }
    this.backdrop_path=backdrop_path;
    this.poster=poster;
    console.log(this.movie);
    this.movieService.addToSystem(this.movie);
  }

  compressFile() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.backdrop_pathResultBeforeCompress = image;

      this.imageCompress
        .compressFile(image, orientation)
        .then(result => {
          this.backdrop_pathResultAfterCompress = result;

          this.backdrop_path =this.backdrop_pathResultBeforeCompress;
        });
    });
  }

  handleChange(): void {
    this.compressFile();
  }

  
  compressFile2() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.posterResultBeforeCompress = image;

      this.imageCompress
        .compressFile(image, orientation)
        .then(result => {
          this.posterResultAfterCompress = result;

          this.poster =this.posterResultBeforeCompress;
          console.log(this.poster)

        });
    });
  }

  handleChange2(): void {
    this.compressFile2();
  }
}
