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
  
      const listOfRecipesWithGif = await this.gifService.getListOfRecipesWithGit(listOfRecipes);
  
      response.status(200).json(
        {
          keywords: listOfIngredients,
          recipes: listOfRecipesWithGif
        }
      );
    }
    catch (err) {
      if (err.message === 'SERVICE UNAVAILABLE') {
        response.status(503).json(
          {
            error: 'Service unavailable'
          }
        );
        return;
      }
      response.status(500).json(
        {
          error: 'Internal server error'
        }
      );
    }
  }
}
