import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { rootRouterConfig } from './app.router';
import { AppComponent } from './app.component';
import { ListComponent, ListItemComponent } from './list';
import { DetailComponent } from './detail';
import { CollectionComponent } from './collection';

import { ContactService, HeaderComponent, FooterComponent, PhonePipe } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent,
    ListComponent, ListItemComponent,
    DetailComponent,
    CollectionComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  bootstrap: [AppComponent],
  providers: [ContactService]
})
export class AppModule {

}
