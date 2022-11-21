
import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Cartitem } from '../shared/models/Cartitem';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
addToCart(food:Food) : void{
  let CartItem = this.cart.items.find(item => item.food.id === food.id )
  if(CartItem){
    this.changeQuantity(food.id , CartItem.quantity +1)
    return;
  }
  this.cart.items.push(new Cartitem (food));
}
removeFromCart(foodId: number):void{
  this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
}
changeQuantity(quantity:number , foodId:number){
  let Cartitem = this.cart.items.find(item => item.food.id === foodId);
  if(!Cartitem) return;
  Cartitem.quantity = quantity;
}
getCart():Cart{
  return this.cart;
}
}
