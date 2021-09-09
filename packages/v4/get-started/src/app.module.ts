import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './app-material.module';
import { rootRouterConfig } from './app.router';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection';
import { EditComponent } from './edit';

import { ContactService, ComponentModule, PipeModule, UtilService } from './shared';

import './style.async.css';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    EditComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    ComponentModule,
    PipeModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  bootstrap: [AppComponent],
  providers: [
    ContactService,
    UtilService
  ]
})
export class AppModule {

}
