import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { HomeComponent } from './home/home.component';
import { GitComponent } from './git/git.component';
import { DoneComponent } from './done/done.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent


@NgModule({
  declarations: [
    AppComponent,
    AppmenuComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
