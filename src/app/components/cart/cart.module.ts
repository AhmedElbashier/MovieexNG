import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";

import { CartRoutingModule } from "./cart-routing.moudle";
import { CartComponent } from "./cart.component";
import { PipeModule } from "src/app/pipe/pipe.module";
import { SkeletonModule } from "src/app/shared/skeleton/skeleton.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { DataViewModule } from "primeng/dataview";
import { ButtonModule } from "primeng/button";
import { PanelModule } from "primeng/panel";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { RatingModule } from "primeng/rating";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {DropdownModule} from 'primeng/dropdown';
 
@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
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
    FormsModule,

  ],
  providers:[DatePipe]
})
export class CartModule {}
