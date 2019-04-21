import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';

import {
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatDialogModule
} from '@angular/material';

// https://github.com/angular/flex-layout

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListModuleComponent } from './list-models/list-models.component';
import { CardComponent } from './card/card.component';
import { ListMaterialComponent } from './list-material/list-material.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FilterlistPipe } from './filterlist.pipe';
import {
  SelectedOptionsComponent,
  PreviewDialogComponent
} from './selected-options/selected-options.component';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ListModuleComponent,
    CardComponent,
    ListMaterialComponent,
    GalleryComponent,
    FilterlistPipe,
    SelectedOptionsComponent,
    PreviewDialogComponent,
    AudioComponent,
    VideoComponent
  ],
  entryComponents: [PreviewDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
