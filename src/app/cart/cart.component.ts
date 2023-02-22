import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  totalPrice: any;
  totalOriginalPrice: any;
  totalDis: any;
  totalDeliveryCharges: any;
  finalPrice: any;
constructor(private cartService : CartService,private router : Router){}

  myProducts : any[] = [];


  goToHome(){
    this.router.navigateByUrl('/header/mobiles');
  }

  ngOnInit() {
    this.cartService.fetchCartDt().subscribe((response : any)=>{
      this.myProducts = response;
      let listOfPrices :any[]= [];
      let totalOriginalPrice : any[]=[];
      let totalDeliveryCh :any[] = [];
      this.myProducts.forEach((ele)=>{
        listOfPrices.push(ele.currentPrice);
        totalOriginalPrice.push(ele.originalPrice);
        totalDeliveryCh.push(ele.deliveryCharges);
      });
      this.totalPrice=this.cartService.sumArray(listOfPrices);
      this.totalOriginalPrice = this.cartService.sumArray(totalOriginalPrice);
      this.totalDis = this.totalOriginalPrice-this.totalPrice;
      this.totalDeliveryCharges = this.cartService.sumArray(totalDeliveryCh);
      this.finalPrice = (this.totalOriginalPrice - this.totalDis ) + this.totalDeliveryCharges;
    });
  }
}
