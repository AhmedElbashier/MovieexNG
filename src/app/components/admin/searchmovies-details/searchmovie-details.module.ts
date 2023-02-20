import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMoviesDetailsRoutingModule } from './searchmovie-details-routing.module';
import { SearchMoviesDetailsComponent } from './searchmovies-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { AppSearchMoviesDialogComponent } from './app-searchmovies-dialog/app-searchmovies-dialog.component';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';


@NgModule({
  declarations: [
    SearchMoviesDetailsComponent,
    AppSearchMoviesDialogComponent
  ],
  entryComponents: [
    AppSearchMoviesDialogComponent
  ],
  imports: [
    CommonModule,
    SearchMoviesDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule
  ],

})
export class SearchMovieDetailsModule { }
