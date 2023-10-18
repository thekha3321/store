import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../models/cart.module';
import { BehaviorSubject } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart = new BehaviorSubject<Cart>({items: []})
  constructor(private_snackBar: MatSnackBar) { }

  addToCart(item: CartItem) :void { 
    const items = [...this.cart.value.items];

    const itemInCart = items.find(_item => _item.id === item.id)

    if(itemInCart)
  }
}
