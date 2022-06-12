import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { GeneralLayoutComponent } from "./layout/general-layout/general.layout";
import { UiLibModule } from "@gbj/ui-lib";

@NgModule({
  declarations: [
    AppComponent,

    GeneralLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    UiLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
