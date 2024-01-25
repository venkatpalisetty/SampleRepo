import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlterComponent } from './alter/alter.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { SampleComponent } from './sample/sample.component';




@NgModule({
  declarations: [
    AppComponent,
    AlterComponent,
    SampleComponent,
    HomeComponent,
    AppmenuComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
