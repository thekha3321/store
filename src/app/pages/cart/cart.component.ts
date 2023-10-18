import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.module';

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
  ngOnInit() : void {
    this.dataSource = this.cart.items
  }
  getTotal(items: Array<CartItem>) : number{ 
    return items.map(item => item.price * item.quantity).reduce((prev, current) =>  prev + current, 0)
  }
  console = console
 }
