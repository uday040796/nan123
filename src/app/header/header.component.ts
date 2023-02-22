import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  myProductsInCart: any = [];
  myProductsInWishlist: any = [];

  constructor(
    public dialog: MatDialog,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit() {
    this.cartService.fetchCartDt().subscribe((res) => {
      this.myProductsInCart = res;
    });
    this.wishlistService.fetchWishlistDt().subscribe((res) => {
      this.myProductsInWishlist = res;
    });
  }

  openSignPopUp() {
    const dialogRef = this.dialog.open(SignupComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSignInPopUp() {
    const dialogRef = this.dialog.open(SigninComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
