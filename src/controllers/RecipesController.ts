import { Request, Response } from 'express';

import Recipe from '../models/Recipe';

export default class RecipeController {
  private recipes: Array<Recipe>;

  async index(request: Request, response: Response) {
    const { i: ingredients } = request.query;

    const listOfIngredients = (ingredients as string)?.split(',');

    this.recipes = [
      {
        "title": "Vegetable-Pasta Oven Omelet",
        "link": "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763",
        "ingredients": "tomato, onions",
        "gif": "http://img.recipepuppy.com/560556.jpg"
      },
    ];

    response.status(200).json(
      {
        keywords: listOfIngredients,
        recipes: this.recipes
      }
    );
  }
}
