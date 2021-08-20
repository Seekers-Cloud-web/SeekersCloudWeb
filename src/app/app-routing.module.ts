import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'Home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }, { path: 'Service', loadChildren: () => import('./modules/service/service.module').then(m => m.ServiceModule) }, { path: 'Product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) }, { path: 'Solution', loadChildren: () => import('./modules/solution/solution.module').then(m => m.SolutionModule) }, { path: 'News', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule) }, { path: 'Careers', loadChildren: () => import('./modules/careers/careers.module').then(m => m.CareersModule) }, { path: 'About', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) }, { path: 'Contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
