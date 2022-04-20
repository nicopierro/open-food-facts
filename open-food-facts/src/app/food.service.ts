import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class FoodService {
  constructor(private http: HttpClient) { }

  searchFood(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=1&json=true`;
    let obsFoods = this.http.get(url);
    return obsFoods;
  }

  getFood(id: string) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}`;
    return this.http.get(url);
  }
}