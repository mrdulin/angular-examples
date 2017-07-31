import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './modules/sidebar';
import { ContentComponent } from './modules/content';
import { DiseaseCenterComponent } from './modules/diseaseCenter';
import { DoctorCenterComponent } from './modules/doctorCenter';

import './style.css';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SidebarComponent,
    DiseaseCenterComponent,
    DoctorCenterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,

    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
