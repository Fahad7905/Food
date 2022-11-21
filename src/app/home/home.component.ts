import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[]= [];

  constructor(private fs:FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.foods= this.fs.getAll();
    this.route.params.subscribe(params =>{
      if(params['searchitem'])
      this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchitem'].toLowerCase()));
      else if (params['tag'])
       this.foods=this.fs.getAllFoodsByTag(params['tag'])

      else
      this.foods=this.fs.getAll();
    })
  }

}
