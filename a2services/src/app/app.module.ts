import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CmpAComponent } from './service/cmp-a.component';
import { CmpBComponent } from './service/cmp-b.component';

import { LogService } from './service/log.service';
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService, DataService], // Mentioning a global provider will create multiple instance of an object
  bootstrap: [AppComponent]
})
export class AppModule { }
