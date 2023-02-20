import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminSudanPlayDetailsRoutingModule } from "./adminsudanplay-details-routing-module";
import { AdminsudanplayDetailsComponent } from "./adminsudanplay-details.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDialogModule, MatIconModule } from "@angular/material";
import { AppAdminsudanplayDetailsComponent } from "./app-adminsudanplay-details/app-adminsudanplay-details.component";
import { CarouselModule } from "primeng/carousel";
import { PipeModule } from "src/app/pipe/pipe.module";

@NgModule({
  declarations: [AdminsudanplayDetailsComponent, AppAdminsudanplayDetailsComponent],
  entryComponents: [AppAdminsudanplayDetailsComponent],
  imports: [
    CommonModule,
    AdminSudanPlayDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule,
  ],
})
export class AdminSudanPlayDetailsModule {}
