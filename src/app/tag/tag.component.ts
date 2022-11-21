import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { tag } from '../shared/models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input()
  foodPageTags?: string[];
  tags:tag[] =[];

  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.fs.getAllTag();
  }

}
