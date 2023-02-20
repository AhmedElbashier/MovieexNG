import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayDetailsRoutingModule } from './Play-details-routing.module';
import { PlayDetailsComponent } from './play-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { AppPlayDialogComponent } from './app-play-dialog/app-play-dialog.component';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';


@NgModule({
  declarations: [
    PlayDetailsComponent,
    AppPlayDialogComponent
  ],
  entryComponents: [
    AppPlayDialogComponent
  ],
  imports: [
    CommonModule,
    PlayDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule
  ],

})
export class PlayDetailsModule { }
