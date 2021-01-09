import { AxiosInstance } from 'axios';

import RecipeMocks from './RecipeMock';
import Recipe from '../../src/models/Recipe';
import GifService from '../../src/services/GifService';

export default class GifServiceMock extends GifService {

  constructor(http: AxiosInstance) {
    super(http);
  }

  async getListOfRecipesWithGit(_: Array<Recipe>): Promise<Array<Recipe>> {
    return Promise.resolve(RecipeMocks.recipesWithGif);
  }
}
