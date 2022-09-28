import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingsComponent } from './head/top-headings/top-headings.component';
import { HttpClientModule } from '@angular/common/http';
import { TechNewsComponent } from './head/tech-news/tech-news.component';
import { BusinessNewsComponent } from './head/business-news/business-news.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingsComponent,
    TechNewsComponent,
    BusinessNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
