import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderDetailsComponent } from './Order-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MatIconModule } from '@angular/material';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { ButtonModule, DataViewModule, DialogModule, Dropdown, DropdownModule, InputTextModule, PanelModule, RatingModule } from 'primeng';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';


@NgModule({
  declarations: [
    OrderDetailsComponent,
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    OrderDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    QRCodeModule

  ],

})
export class OrderDetailsModule { }
