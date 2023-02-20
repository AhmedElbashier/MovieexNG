import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTvsDetailsRoutingModule } from './searchtvs-details-routing.module';
import { SearchTvsDetailsComponent } from './searchtvs-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { AppSearchTvsDialogComponent } from './app-searchtvs-dialog/app-searchtvs-dialog.component';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module'


@NgModule({
  declarations: [
    SearchTvsDetailsComponent,
    AppSearchTvsDialogComponent
  ],
  entryComponents: [
    AppSearchTvsDialogComponent
  ],
  imports: [
    CommonModule,
    SearchTvsDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule
  ],

})
export class SearchTvsDetailsModule { }
