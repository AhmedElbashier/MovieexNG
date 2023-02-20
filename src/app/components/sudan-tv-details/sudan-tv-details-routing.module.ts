import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SudanTvDetailsComponent } from "./sudan-tv-details.component";

const routes: Routes = [{ path: "", component: SudanTvDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SudanTvDetailsRoutingModule {}
