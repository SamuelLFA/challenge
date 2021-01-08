import { Request, Response } from 'express';

import Recipe from '../models/Recipe';

export default class RecipeController {
  private recipes: Array<Recipe>;

  async index(request: Request, response: Response) {
    const { i: ingredients } = request.query;

    const listOfIngredients = (ingredients as string)?.split(',');

    this.recipes = [
      {
        title: 'Recipe title',
        ingredients: 'garlic,orlic',
        link: 'http://localhost.com',
        gif: 'http://gif.com',
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
