import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvsCatalougeDetailsRoutingModule } from './tvscatalouge-details-routing-module';
import { TvscatalougeDetailsComponent } from './tvscatalouge-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { AppTvscatalougeDetailsComponent } from './app-tvscatalouge-details/app-tvscatalouge-details.component';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';


@NgModule({
  declarations: [
    TvscatalougeDetailsComponent,
    AppTvscatalougeDetailsComponent
  ],
  entryComponents: [
    AppTvscatalougeDetailsComponent
  ],
  imports: [
    CommonModule,
    TvsCatalougeDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule
  ],

})
export class TvsCatalougeDetailsModule { }
