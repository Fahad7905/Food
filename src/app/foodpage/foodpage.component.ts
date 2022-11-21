import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
food!:Food;
  constructor(private activatedRoute:ActivatedRoute,
    private foodservice: FoodService) {
      activatedRoute.params.subscribe((params)=>{
        if (params['id'])
        this.food = foodservice.getFoodById(params['id'])
      })
     }

  ngOnInit(): void {
  }

}
