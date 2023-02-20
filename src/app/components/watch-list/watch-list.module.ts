import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchListRoutingModule } from './watch-list-routing.module';
import { WatchListComponent } from './watch-list.component';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [WatchListComponent],
  imports: [
    CommonModule,
    WatchListRoutingModule,
    PipeModule,
    SkeletonModule,
    MatPaginatorModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    RatingModule,
    FormsModule
  ]
})
export class WatchListModule { }
