import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlayscatalougeDetailsComponent } from "./playscatalouge-details.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDialogModule, MatIconModule } from "@angular/material";
import { AppPlayscatalougeDetailsComponent } from "./app-playscatalouge-details/app-playscatalouge-details.component";
import { CarouselModule } from "primeng/carousel";
import { PipeModule } from "src/app/pipe/pipe.module";
import { PlaycatalougeRoutingModule } from "./playscatalouge-details-routing-module";

@NgModule({
  declarations: [PlayscatalougeDetailsComponent, AppPlayscatalougeDetailsComponent],
  entryComponents: [AppPlayscatalougeDetailsComponent],
  imports: [
    CommonModule,
    PlaycatalougeRoutingModule,
    PipeModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule,
  ],
})
export class PlaycatalougeDetailsModule {}
