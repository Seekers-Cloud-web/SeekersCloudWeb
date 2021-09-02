import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }, {
    path: 'service',
    loadChildren: () => import('./modules/service/service.module').then(m => m.ServiceModule)
  }, {
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  }, {
    path: 'solution',
    loadChildren: () => import('./modules/solution/solution.module').then(m => m.SolutionModule)
  }, {
    path: 'news', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule)
  }, {
    path: 'careers',
    loadChildren: () => import('./modules/careers/careers.module').then(m => m.CareersModule)
  }, {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  }, {path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
