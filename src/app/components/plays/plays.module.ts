import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaysRoutingModule } from './Plays-routing.module';
import { PlaysComponent } from './Plays.component';
import {CarouselModule} from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatTab, MatTabsModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    PlaysRoutingModule,
    PipeModule,
    CarouselModule,
    SkeletonModule,
    ScrollingModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule
  ],
  declarations: [
    PlaysComponent,
  ]
})
export class PlaysModule {}
