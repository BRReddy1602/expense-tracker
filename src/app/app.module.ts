import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LabelComponent } from './label/label.component';
import { FormComponent } from './form/form.component';
import { ValueComponent } from './value/value.component';


@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    FormComponent,
    ValueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
