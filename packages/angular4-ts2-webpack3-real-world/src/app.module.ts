import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home';
import { tagManagerComponent } from './modules/tagManager';
import { SidebarComponent } from './modules/sidebar';
import { ContentComponent } from './modules/content';
import { DiseaseCenterComponent } from './modules/diseaseCenter';
import { DoctorCenterComponent } from './modules/doctorCenter';

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
    RouterModule.forRoot(routes, { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
