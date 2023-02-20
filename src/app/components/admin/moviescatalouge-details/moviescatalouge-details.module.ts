import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesCatalougeDetailsRoutingModule } from './moviescatalouge-details-routing-module';
import { MoviescatalougeDetailsComponent } from './moviescatalouge-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { AppMoviescatalougeDetailsComponent } from './app-moviescatalouge-details/app-moviescatalouge-details.component';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';


@NgModule({
  declarations: [
    MoviescatalougeDetailsComponent,
    AppMoviescatalougeDetailsComponent
  ],
  entryComponents: [
    AppMoviescatalougeDetailsComponent
  ],
  imports: [
    CommonModule,
    MoviesCatalougeDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule
  ],

})
export class MovieCatalougeDetailsModule { }
