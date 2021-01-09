import { AxiosInstance } from 'axios';

import RecipeMocks from './RecipeMock';
import Recipe from '../../src/models/Recipe';
import RecipeService from '../../src/services/RecipesService';

export default class RecipeServiceMock extends RecipeService {

  constructor(http: AxiosInstance) {
    super(http);
  }

  async getRecipes(_: Array<String>): Promise<Array<Recipe>> {
    return Promise.resolve(RecipeMocks.recipes);
  }
}
