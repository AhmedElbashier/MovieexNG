import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SudanPlayDetailsRoutingModule } from './Sudan-play-details-routing.module';
import { SudanPlayDetailsComponent } from './Sudan-play-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { AppSdPlayDialogComponent } from './app-sd-play-dialog/app-sd-play-dialog.component';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';


@NgModule({
  declarations: [
    SudanPlayDetailsComponent,
    AppSdPlayDialogComponent
  ],
  entryComponents: [
    AppSdPlayDialogComponent
  ],
  imports: [
    CommonModule,
    SudanPlayDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule
  ],

})
export class SudanPlayDetailsModule { }
