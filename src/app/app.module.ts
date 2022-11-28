import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { NewsNavbarComponent } from './news-navbar/news-navbar.component';

const myRoute: Routes =[
  {
    path:"",
    component: ViewNewsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewNewsComponent,
    NewsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
