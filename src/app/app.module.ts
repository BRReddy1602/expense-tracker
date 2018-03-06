import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LabelComponent } from './label/label.component';
import { FormComponent } from './form/form.component';
import { ValueComponent } from './value/value.component';
import { TextComponent } from './text/text.component';
import { DateComponent } from './date/date.component';
import { FormElementComponent } from './form-element/form-element.component';


@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    FormComponent,
    ValueComponent,
    TextComponent,
    DateComponent,
    FormElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
