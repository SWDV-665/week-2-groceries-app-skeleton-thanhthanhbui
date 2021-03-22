import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesDataService {

  items = [];

  constructor() { 
    console.log('Utilizing GroceriesDataService');
  }


}
