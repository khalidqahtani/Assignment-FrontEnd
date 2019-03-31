import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivestudentComponent } from './activestudent/activestudent.component';
import { UnactivestudentComponent } from './unactivestudent/unactivestudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdateComponent } from './update/update.component';
import { NavComponent } from './nav/nav.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxPrintModule} from 'ngx-print';


@NgModule({
  declarations: [
    AppComponent,
    ActivestudentComponent,
    UnactivestudentComponent,
    AddstudentComponent,
    UpdateComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxPrintModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
