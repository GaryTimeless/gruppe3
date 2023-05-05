import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
// Taiga UI Module
import { TuiRootModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiInputFilesModule } from '@taiga-ui/kit';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Taiga UI Modele
    TuiRootModule,
    TuiInputModule,
    TuiRootModule,
    TuiInputFilesModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
