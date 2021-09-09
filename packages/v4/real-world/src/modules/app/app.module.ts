import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar';
import { ContentComponent } from './content';
import { BreadcrumbComponent } from 'common/components/breadcrumb';

import { StringService, NavigationService } from 'common/services';

import './style.async.css';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,

    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [StringService, NavigationService]
})
export class AppModule {

}
