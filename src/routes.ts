import { Router } from 'express';

import QueryValidator from './middlewares/QueryValidator';

import RecipeController from './controllers/RecipesController';

const routes = Router();

const recipeController = new RecipeController();

routes.get('/recipes', QueryValidator, recipeController.index.bind(recipeController));

export default routes;
