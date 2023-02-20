import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SudanTvDetailsRoutingModule } from "./Sudan-tv-details-routing.module";
import { SudanTvDetailsComponent } from "./Sudan-tv-details.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDialogModule, MatIconModule } from "@angular/material";
import { AppSdTvDialogComponent } from "./app-sd-tv-dialog/app-sd-tv-dialog.component";
import { CarouselModule } from "primeng/carousel";
import { PipeModule } from "src/app/pipe/pipe.module";

@NgModule({
  declarations: [SudanTvDetailsComponent, AppSdTvDialogComponent],
  entryComponents: [AppSdTvDialogComponent],
  imports: [
    CommonModule,
    SudanTvDetailsRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule,
  ],
})
export class SudanTvDetailsModule {}
