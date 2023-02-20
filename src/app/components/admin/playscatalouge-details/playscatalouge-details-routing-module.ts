import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {PlayscatalougeDetailsComponent } from "./playscatalouge-details.component";

const routes: Routes = [{ path: "", component:PlayscatalougeDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaycatalougeRoutingModule {}
