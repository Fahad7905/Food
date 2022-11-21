import { Food } from "./food";

export class Cartitem{
      constructor(food:Food){
        this.food=food;
        this.Price;
      }



    food:Food;
    quantity: number = 1;
    get Price():number{
        return this.food.price * this.quantity;
    }

}