import { Request, Response } from 'express';

import RecipesService from '../services/RecipesService';
import GifService from '../services/GifService';
export default class RecipeController {
  private recipeService: RecipesService;
  private gifService: GifService;

  constructor(recipeService: RecipesService, gifService: GifService) {
    this.recipeService = recipeService;
    this.gifService = gifService;
  }

  async index(request: Request, response: Response) {
    try {
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
  
      const listOfRecipesWithGif = await this.gifService.getListOfRecipesWithGit(listOfRecipes);
  
      response.status(200).json(
        {
          keywords: listOfIngredients,
          recipes: listOfRecipesWithGif
        }
      );
    }
    catch (err) {
      response.status(500).json(
        {
          error: 'Internal server error'
        }
      );
    }
  }
}
