import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowmoviesComponent } from './components/showmovies/showmovies.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
  path:"",
  pathMatch:"full",
  redirectTo:"showfilms"
  },
  {
    path:"showfilms",
    component:ShowmoviesComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowmoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    RouterModule.forRoot(routes,
      {
        enableTracing:true,
        paramsInheritanceStrategy:"always",
        useHash:true
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
