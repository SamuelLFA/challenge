import { Router } from 'express';

import RecipeController from './controllers/RecipesController';

const routes = Router();

const recipeController = new RecipeController();

routes.get('/recipes', recipeController.index.bind(recipeController));

export default routes;
