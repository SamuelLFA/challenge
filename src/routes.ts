import { Router } from 'express';
import axios from 'axios';

import QueryValidator from './middlewares/QueryValidator';

import RecipesController from './controllers/RecipesController';
import RecipesService from './services/RecipesService';
import GifService from './services/GifService';

const routes = Router();

const httpService = new RecipesService(axios);
const gifService = new GifService(axios);
const recipesController = new RecipesController(httpService, gifService);

routes.get('/recipes', QueryValidator, recipesController.index.bind(recipesController));

export default routes;
