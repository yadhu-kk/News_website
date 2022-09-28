import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './head/business-news/business-news.component';
import { TechNewsComponent } from './head/tech-news/tech-news.component';
import { TopHeadingsComponent } from './head/top-headings/top-headings.component';

const routes: Routes = [
  {
    path: '',
    component: TopHeadingsComponent,
  },
  {
    path: 'tech',
    component: TechNewsComponent,
  },
  {
    path: 'business',
    component: BusinessNewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
