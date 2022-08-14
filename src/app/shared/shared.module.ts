import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeComponentsModule } from './ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonComponentModule } from '../common-component/common-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from '../authentication/authentication.module';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';



@NgModule({
  declarations: [],
  imports: [
    PrimeComponentsModule, 
    CommonComponentModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    PrimeComponentsModule
  ]
})
export class SharedModule { }
