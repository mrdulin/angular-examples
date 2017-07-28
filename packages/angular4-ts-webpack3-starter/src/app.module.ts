import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { rootRouterConfig } from './app.router';
import { AppComponent } from './app.component';
import { ListComponent } from './list';

import { ContactService, HeaderComponent, FooterComponent } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent,
    ListComponent
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
