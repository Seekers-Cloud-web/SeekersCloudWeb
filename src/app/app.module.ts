import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderContainerComponent } from './core/header/header-container/header-container.component';
import { TopBarComponent } from './core/header/top-bar/top-bar.component';
import { LogoWrapComponent } from './core/header/logo-wrap/logo-wrap.component';
import { TopNavBarComponent } from './core/header/top-nav-bar/top-nav-bar.component';
import {OwlModule} from "ngx-owl-carousel";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    TopBarComponent,
    LogoWrapComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OwlModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
