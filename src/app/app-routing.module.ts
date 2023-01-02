import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : '',redirectTo : '/header/home' , pathMatch : 'full'},
  {path : 'header',component : HeaderComponent,children : [
    {path : 'home',component : HomeComponent},
    {path : 'about' , component : AboutComponent},
    {path : 'career' , component : CareerComponent},
    {path : 'account', component : AccountComponent},
    {path : 'contact', component : ContactComponent},
    {path: '**' ,component : PageNotFoundComponent}
  ]},
  {path: '**' ,component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
