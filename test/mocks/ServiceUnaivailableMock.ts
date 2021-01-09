import { AxiosInstance } from 'axios';

import RecipeMocks from './RecipeMock';
import Recipe from '../../src/models/Recipe';
import RecipeService from '../../src/services/RecipesService';

export default class ServiceUnavailableMock extends RecipeService {

  constructor(http: AxiosInstance) {
    super(http);
  }

  async getRecipes(_: Array<String>): Promise<Array<Recipe>> {
    throw Error('SERVICE UNAVAILABLE')
  }
}
