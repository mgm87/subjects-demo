import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { SubjectProviderService } from './service/subject-provider.service';
import { BadButtonComponent } from './component/bad-button/bad-button.component';
import { GoodButtonComponent } from './component/good-button/good-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BadButtonComponent,
    GoodButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [
    SubjectProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
