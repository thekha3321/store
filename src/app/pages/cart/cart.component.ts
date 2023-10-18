import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.module';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent { 
  cart : Cart = {items: [{
  product : 'https://via.placeholder.com/150',
  name: 'snickers',
  price: 150,
  quantity : 1,
  id: 1,
  },
  {
    product : 'https://via.placeholder.com/150',
    name: 'snickers',
    price: 150,
    quantity : 3,
    id: 2,
  },
  ]}
  dataSource : CartItem[] = []
  displayedColumns : Array<string> = [
     'product',
      'name',
      'price',
      'quantity',
      'total', 
      'action',
  ] 
  constructor (private cartService: CartService) {
  }
  ngOnInit() : void {
    this.cartService.cart.subscribe((_cart : Cart) => {
      this.cart = _cart
      this.dataSource = this.cart.items
    })
  }
  getTotal(items: Array<CartItem>) : number{ 
    return this.cartService.getTotal(items)
  }
  onClearCart () : void {
    this.cartService.clearCart()
  }
  onRemoveFromCart(item: CartItem) {
    this.cartService.removeFromCart(item)
  }
  onAddQuatity(item: CartItem) : void{
    this.cartService.addToCart(item)
  }
  onRemoveQuatity(item: CartItem) : void{
    this.cartService.removeQuantity(item)
  }
 }
