import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderRoutingModule } from "./order-routing.module";
import { OrderComponent } from "./order.component";
import { PipeModule } from "src/app/pipe/pipe.module";
import { SkeletonModule } from "src/app/shared/skeleton/skeleton.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { DataViewModule } from "primeng/dataview";
import { ButtonModule } from "primeng/button";
import { PanelModule } from "primeng/panel";
import { DropdownModule } from "primeng/dropdown";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { RatingModule } from "primeng/rating";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { QRCodeModule } from "angular2-qrcode";
import { ConfirmationService, FileUploadModule, MessageService, TableModule, ToastModule, ToolbarModule } from "primeng";

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
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
    QRCodeModule,
    ToastModule,
    FileUploadModule,
    ToolbarModule,
    TableModule,
  ],
  providers:[ConfirmationService,MessageService],
})
export class OrderModule {}
