import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	
	private recipes: Recipe[] = [
    new Recipe(
     'A Test Recipe',
      'This is simply a test',
       'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg',
    [
    	new Ingredient('Meat', 1),
    	new Ingredient('French Fries', 20)
    ]),
      new Recipe( 'Another Test Recipe', 
      'This is simply a test',
       'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg',
      [
      	new Ingredient('Buns', 18),
    	new Ingredient('Egg Roll', 30)
      ])
  ];

 constructor(private slService: ShoppingListService) {}

  getRecipes() {
   	return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
  	this.slService.addIngredients(ingredients);
  }
}