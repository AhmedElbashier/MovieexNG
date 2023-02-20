import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing-module";
import { LoginComponent } from "./login.component";
import { CarouselModule } from "primeng/carousel";
import { PipeModule } from "src/app/pipe/pipe.module";
import { SkeletonModule } from "src/app/shared/skeleton/skeleton.module";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatCard, MatCardModule, MatProgressSpinnerModule, MatSpinner } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    PipeModule,
    CarouselModule,
    SkeletonModule,
    ScrollingModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
