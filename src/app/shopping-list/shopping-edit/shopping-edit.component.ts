import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputReff: ElementRef;
  @ViewChild('amountInput') amountInputReff: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingredientName = this.nameInputReff.nativeElement.value;
    const ingredientAmount = this.amountInputReff.nativeElement.value;
    const newIngredient = new Ingredients(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
