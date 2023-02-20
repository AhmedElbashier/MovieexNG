import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminSudanMovieDetailsRoutingModule } from "./adminsudanmovie-details-routing-module";
import { AdminsudanmovieDetailsComponent } from "./adminsudanmovie-details.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDialogModule, MatIconModule } from "@angular/material";
import { AppAdminsudanmovieDetailsComponent } from "./app-adminsudanmovie-details/app-adminsudanmovie-details.component";
import { CarouselModule } from "primeng/carousel";
import { PipeModule } from "src/app/pipe/pipe.module";

@NgModule({
  declarations: [AdminsudanmovieDetailsComponent, AppAdminsudanmovieDetailsComponent],
  entryComponents: [AppAdminsudanmovieDetailsComponent],
  imports: [
    CommonModule,
    AdminSudanMovieDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule,
  ],
})
export class AdminSudanMovieDetailsModule {}
