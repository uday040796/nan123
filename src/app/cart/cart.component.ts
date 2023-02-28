import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  quantity: any[] = [];
  totalPrice: any;
  totalOriginalPrice: any;
  totalDis: any;
  totalDeliveryCharges: any;
  finalPrice: any;
  constructor(
    private cartService: CartService,
    private router: Router,
    private wishlistService: WishlistService
  ) {}

  myProducts: any[] = [];

  onChange() {
    console.log('quantity', this.quantity);
    let objArr: any[] = [];
    this.myProducts.forEach((element, index) => {
      let obj = {
        originalPrice: element.originalPrice * this.quantity[index],
        currentPrice: element.currentPrice * this.quantity[index],
        discount:
          element.originalPrice * this.quantity[index] -
          element.currentPrice * this.quantity[index],
        delivery : element.deliveryCharges * this.quantity[index]  
      };
      objArr.push(obj);
    });
    console.log(objArr);
    let allOriginalPrices:any[] = [];
    let alldiscounts:any[] =[];
    let allDelivery :any[] = [];
    objArr.forEach((e)=>{
      allOriginalPrices.push(e.originalPrice);
      alldiscounts.push(e.originalPrice-e.currentPrice);
      allDelivery.push(e.delivery);
    });
    this.totalOriginalPrice = this.cartService.sumArray(allOriginalPrices);
    this.totalDis = this.cartService.sumArray(alldiscounts);
    this.totalDeliveryCharges = this.cartService.sumArray(allDelivery);
    this.finalPrice =this.totalOriginalPrice - this.totalDis + this.totalDeliveryCharges;
  }

  goToHome() {
    this.router.navigateByUrl('/header/mobiles');
  }

  deleteFromCart(id: number) {
    console.log(id);
    this.cartService.deleteProductFromCart(id).subscribe((res) => {
      console.log(res);
    });
    location.reload();
  }

  moveToWishlist(product: any) {
    this.wishlistService.postIntoWishlist(product).subscribe((res) => {});
    this.cartService.deleteProductFromCart(product.id).subscribe((res) => {});
    this.router.navigateByUrl('/header/wishlist');
  }

  ngOnInit() {
    this.cartService.fetchCartDt().subscribe((response: any) => {
      this.myProducts = response;
      this.myProducts.forEach((ele) => {
        this.quantity.push('1');
      });
      this.onChange();
    });
  }
}
