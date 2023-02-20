import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvsCatalougeComponent } from './TvsCatalouge.component';
import { TvsCatalougeRoutingModule } from './TvsCatalouge-routing.module';
import {CarouselModule} from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ɵangular_packages_platform_browser_animations_animations_d } from '@angular/platform-browser/animations';
import {MatCardModule,MatButtonModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    TvsCatalougeRoutingModule,
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
    ReactiveFormsModule
  ],
  declarations: [
    TvsCatalougeComponent,
  ]
})
export class TvsCatalougeModule {}
