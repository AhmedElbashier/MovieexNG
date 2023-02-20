import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminSudanTvDetailsRoutingModule } from "./adminsudantv-details-routing-module";
import { AdminsudantvDetailsComponent } from "./adminsudantv-details.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDialogModule, MatIconModule } from "@angular/material";
import { AppAdminsudantvDetailsComponent } from "./app-adminsudantv-details/app-adminsudantv-details.component";
import { CarouselModule } from "primeng/carousel";
import { PipeModule } from "src/app/pipe/pipe.module";

@NgModule({
  declarations: [AdminsudantvDetailsComponent, AppAdminsudantvDetailsComponent],
  entryComponents: [AppAdminsudantvDetailsComponent],
  imports: [
    CommonModule,
    AdminSudanTvDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule,
  ],
})
export class AdminSudanTvDetailsModule {}
