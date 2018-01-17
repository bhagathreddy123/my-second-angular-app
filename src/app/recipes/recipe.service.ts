import { Recipe } from './recipe.model';
export class RecipeService {
	private recipes: Recipe[] = [
    new Recipe( 'A Test Recipe', 'This is simply a test', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg'),
      new Recipe( 'Another Test Recipe', 'This is simply a test', 'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg')
  ];

  getRecipes() {
   	return this.recipes.slice();
  }
}