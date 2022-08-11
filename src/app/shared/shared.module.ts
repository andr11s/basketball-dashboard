import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeComponentsModule } from './ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonComponentModule } from '../common-component/common-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    PrimeComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonComponentModule,

  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    PrimeComponentsModule
  ]
})
export class SharedModule { }
