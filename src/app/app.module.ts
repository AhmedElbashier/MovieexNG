import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from "primeng/carousel";
import { SidebarModule } from "primeng/sidebar";
import { HeaderComponent } from "./components/includes/header/header.component";
import { SliderComponent } from "./components/slider/slider.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/includes/footer/footer.component";
import { PipeModule } from "./pipe/pipe.module";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { SkeletonModule } from "./shared/skeleton/skeleton.module";
import { MatTabsModule } from "@angular/material";
import { SudanComponent } from "./components/sudan/sudan.component";
import {
  DialogElementsExample,
  DialogElementsExampleDialog,
} from "./components/admin/searchmovies-details/dialog/DialogElementsExample";
import { MessageService } from "primeng";
import { QRCodeModule } from "angular2-qrcode"; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    FooterComponent,
    SudanComponent,
    DialogElementsExampleDialog,
    DialogElementsExample,
   
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PipeModule,
    CarouselModule,
    SidebarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    SkeletonModule,
    MatTabsModule,
    MatIconModule,
    QRCodeModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
   
  ],


  entryComponents: [DialogElementsExampleDialog, DialogElementsExample],
  bootstrap: [AppComponent],
  providers: [MessageService]
})
export class AppModule {}
