import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  constructor(private wishlistService : WishlistService){}

  myProducts : any[] = [];

  ngOnInit() {
    this.wishlistService.fetchWishlistDt().subscribe((response : any)=>{
      console.log(response);
      this.myProducts = response;
    });
  }
}
