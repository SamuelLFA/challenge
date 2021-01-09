import { Request, Response } from 'express';

import RecipesService from '../services/RecipesService';
export default class RecipeController {
  private recipeService: RecipesService;

  constructor(recipeService: RecipesService) {
    this.recipeService = recipeService;
  }

  async index(request: Request, response: Response) {
    const { i: ingredients } = request.query;

    const normalizeInput = (ingredients as string)
      ?.split(',')
      .map(ingredient => ingredient.trim())
      .filter(ingredient => ingredient.length);

    const listOfIngredients = normalizeInput;

    const listOfRecipes = await this.recipeService.getRecipes(listOfIngredients);

    if (!listOfRecipes) {
      response.status(400).json({ error: true });
      return;
    }

    response.status(200).json(
      {
        keywords: listOfIngredients,
        recipes: listOfRecipes
      }
    );
  }
}
