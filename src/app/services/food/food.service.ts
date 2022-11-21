import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}
    getFoodById(id:number): Food{
      return this.getAll().find(food => food.id == id)!;
    }


    getAllFoodsByTag(tag:string):Food[]{
      return tag == "All"?
      this.getAll():this.getAll().filter(food => food.tags?.includes(tag));

    }
   


   getAllTag():tag[]{
    return[
      {name: 'All', count: 8 },
      {name: 'Fastfood', count: 6 },
      {name: 'Pizza', count: 3 },
      {name: 'Lunch', count: 3 },
      {name: 'SlowFood', count: 2 },
      {name: 'Hambuger', count: 1 },
      {name: 'Fry', count: 1 },
      {name: 'Soup', count: 1 },
    ];

   }


  getAll():Food[]{
    return [{
      id: 1,
    price:10,
    name:'Pizza pepperoni',
    favorite: true,
    star:4.5,
    tags:[ 'All','Pizza'],
    imageUrl: '/assets/food.1.jpg',
    cooktime: '10-20',
    origins:['Italy']
  },
  {
    id: 2,
  price:20,
  name:'Meatball',
  favorite: false,
  star:4.5,
  tags:['All','Lunch','SlowFood'],
  imageUrl: '/assets/food.2.jpg',
  cooktime: '10-20',
  origins:['Persia Middel East China']
},
{
  id: 3,
price:5,
name:'Hamburger',
favorite: true,
star:4.5,
tags:['All','Hambuger','Fastfood'],
imageUrl: '/assets/food.3.jpg',
cooktime: '10-20',
origins:['germany us']
},
{
  id: 4,
price:2,
name:'Friech fries',
favorite: true,
star:4.5,
tags:['All','Fry','Fastfood'],
imageUrl: '/assets/food.4.jpg',
cooktime: '10-20',
origins:['belgium france india']
},
{
  id: 5,
price: 4,
name:'Chicken Soup',
favorite: false,
star:4.5,
tags:['All','Soup'],
imageUrl: '/assets/food.5.jpg',
cooktime: '10-20',
origins:['india asia']
},
{
  id: 6,
price: 10,
name:'Chilli Pizza',
favorite: false,
star:4.5,
tags:['All','Pizza'],
imageUrl: '/assets/food.6.jpg',
cooktime: '10-20',
origins:['italy']
},
{
  id: 7,
price:5,
name:'Burger',
favorite: true,
star:4.5,
tags:['All','Burger','Fastfood'],
imageUrl: '/assets/food.7.jpg',
cooktime: '10-20',
origins:['indian']
},
{
  id: 8,
price:12,
name:'Spicy Pizza',
favorite: true,
star:4.5,
tags:['All','Pizza'],
imageUrl: '/assets/food.8.jpg',
cooktime: '10-20',
origins:['indian']
},
]
  }
}
