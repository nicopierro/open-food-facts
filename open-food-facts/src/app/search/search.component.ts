import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  title = 'first-routed-app';
  obsFoods: Observable<any>;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public foods: FoodService) { }

  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsFoods = this.foods.searchFood(this.query);
    this.obsFoods.subscribe((data) => {
      this.results = data;
      console.log(this.results);
    });
  }

  ngOnInit(): void {
  }

}
