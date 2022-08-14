import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonComponentModule } from './common-component/common-component.module';
import { SharedModule } from './shared/shared.module';
import { CommonNavbarComponent } from './common-component/common-navbar/common-navbar.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

 
@NgModule({
  declarations: [
    AppComponent,
    CommonNavbarComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
