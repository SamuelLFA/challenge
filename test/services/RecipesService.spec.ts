import { AxiosInstance } from 'axios';

import RecipesService from '../../src/services/RecipesService';
import UtilsMocks from '../mocks/UtilsMock';
import RecipeMocks from '../mocks/RecipeMock';
import RecipePuppyMock from '../mocks/RecipePuppyMock';

describe('Recipes Service', () => {
  const recipes = RecipeMocks.recipes;
  const mockResponse = {
    data: {
      results: RecipePuppyMock
    }
  }
  const ingredients = ['orlic', 'onion'];

  test('it should return a list of recipes with no gif', async () => {
    const httpMock = UtilsMocks.httpMock(mockResponse);
    const recipesService = new RecipesService(httpMock as AxiosInstance);

    const response = await recipesService.getRecipes(ingredients);

    expect(response).toBeInstanceOf(Array);
    expect(response).toStrictEqual(recipes);
  });

  test('it should return an empty list', async () => {
    const httpMock = UtilsMocks.httpMock({
      data: {
        results: []
      }
    });
    const recipesService = new RecipesService(httpMock as AxiosInstance);
    const response = await recipesService.getRecipes([]);

    expect(response).toBeInstanceOf(Array);
    expect(response).toStrictEqual([]);
  });
});
