import { Cartitem } from "./Cartitem";

export class Cart{
    items:Cartitem[] = [];

    get tottalPrice():number{
        let tottalPrice = 0;
        this.items.forEach(item => {
            tottalPrice += item.Price;
            
        });
        return tottalPrice;
    }
}