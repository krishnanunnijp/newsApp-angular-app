import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { NewsNavbarComponent } from './news-navbar/news-navbar.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

const myRoute: Routes =[
  {
    path:"",
    component: ViewNewsComponent
  },  {
    path:"add",
    component: AddNewsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewNewsComponent,
    NewsNavbarComponent,
    AddNewsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
