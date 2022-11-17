import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { ChildComponentComponent } from './child-component/child-component.component';
import { GrandchildComponentComponent } from './grandchild-component/grandchild-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    ChildComponentComponent,
    GrandchildComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
