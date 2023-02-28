import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  constructor(private wishlistService : WishlistService,private cartService : CartService,private router : Router){}

  myProducts : any[] = [];

  ngOnInit() {
    this.wishlistService.fetchWishlistDt().subscribe((response : any)=>{
      console.log(response);
      this.myProducts = response;
    });
  }

  removeFromWishlist(id:number){
    this.wishlistService.deleteProductFromWishlist(id).subscribe((response : any)=>{
      console.log(response);
    });
    location.reload();
  }

  moveToCart(product:any){
    this.cartService.postIntoCart(product).subscribe((res)=>{});
    this.wishlistService.deleteProductFromWishlist(product.id).subscribe((res)=>{});
    this.router.navigateByUrl('/header/cart');
  }
}
