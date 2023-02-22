import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { OtherElectronicsComponent } from './other-electronics/other-electronics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path : '', redirectTo : '/header/mobiles' , pathMatch : 'full'},
  {path:'header',component : HeaderComponent,children:[
    {path : 'laptops',component : LaptopsComponent},
    {path : 'mobiles', component : MobilesComponent},
    {path : 'others',component : OtherElectronicsComponent},
    {path : 'cart', component : CartComponent},
    {path : 'wishlist',component : WishlistComponent}
  ]},
  {path : '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
