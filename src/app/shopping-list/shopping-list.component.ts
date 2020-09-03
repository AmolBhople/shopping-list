import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Banana', 50),
    new Ingredients('Peas', 2),
    new Ingredients('Salt', 1)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredients){
    this.ingredients.push(ingredient);

  }

}
