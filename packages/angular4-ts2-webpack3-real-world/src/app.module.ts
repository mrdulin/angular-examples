import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { routes } from './app.routes';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home';
import { tagManagerComponent } from './modules/tagManager';
import { SidebarComponent } from './modules/sidebar';
import { ContentComponent } from './modules/content';
import { DiseaseCenterComponent } from './modules/diseaseCenter';
import { DoctorCenterComponent } from './modules/doctorCenter';

import './style.css';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    tagManagerComponent,
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
    RouterModule.forRoot(routes, { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
