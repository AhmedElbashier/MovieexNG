import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddsudanplayComponent } from './addsudanplay.component';
import { AddsudanPlayRoutingModule } from './addsudanplay-routing-module';
import {CarouselModule} from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule,MatButtonModule, MatTabsModule} from '@angular/material';
import { NgxImageCompressService } from "ngx-image-compress";


@NgModule({
  imports: [
    CommonModule,
    AddsudanPlayRoutingModule,
    PipeModule,
    CarouselModule,
    SkeletonModule,
    ScrollingModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTabsModule

  ],
  providers:[NgxImageCompressService],
  declarations: [
    AddsudanplayComponent,
  ]
})
export class AddsudanPlayModule {}
