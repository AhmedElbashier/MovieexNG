import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SudanMovieDetailsRoutingModule } from './Sudan-movie-details-routing.module';
import { SudanMovieDetailsComponent } from './Sudan-movie-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { AppSdMovieDialogComponent } from './app-sd-movie-dialog/app-sd-movie-dialog.component';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';


@NgModule({
  declarations: [
    SudanMovieDetailsComponent,
    AppSdMovieDialogComponent
  ],
  entryComponents: [
    AppSdMovieDialogComponent
  ],
  imports: [
    CommonModule,
    SudanMovieDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule
  ],

})
export class SudanMovieDetailsModule { }
