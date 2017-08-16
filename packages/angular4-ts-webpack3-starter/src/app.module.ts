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
import { EditComponent } from './edit';

import { ContactService, HeaderComponent, FooterComponent, PhonePipe, UtilService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent,
    ListComponent, ListItemComponent,
    DetailComponent,
    CollectionComponent,
    EditComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  bootstrap: [AppComponent],
  providers: [ContactService, UtilService]
})
export class AppModule {

}
