import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { AdminSudanMovieRoutingModule } from './adminsudanmovie-routing.module';
import { AdminsudanmovieComponent } from './adminsudanmovie.component';
import { FileUploadModule, ToastModule, ToolbarModule } from 'primeng';

@NgModule({
  imports: [
    CommonModule,
    AdminSudanMovieRoutingModule,
    PipeModule,
    CarouselModule,
    SkeletonModule,
    ScrollingModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule
  ],
  declarations: [
    AdminsudanmovieComponent,
  ]
})
export class AdminSudanMovieModule {}
