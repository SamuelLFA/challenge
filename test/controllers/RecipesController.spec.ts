import { Request, Response } from 'express';
import { AxiosInstance } from 'axios';

import RecipesController from '../../src/controllers/RecipesController';
import UtilsMocks from '../mocks/UtilsMock';
import RecipeMocks from '../mocks/RecipeMock';
import RecipesServiceMock from '../mocks/RecipesServiceMock';

describe('Recipes Controller', () => {
  const recipes = RecipeMocks.recipes;
  const keywords = ['orlic', 'onion'];
  const expectedResp = {
    keywords,
    recipes
  }

  const httpMock = UtilsMocks.httpMock(recipes);
  const recipesServiceMock = new RecipesServiceMock(httpMock as AxiosInstance);
  const recipesController = new RecipesController(recipesServiceMock);
  const res = UtilsMocks.mockResponse();

  test('it should return a list of recipes', async () => {
    const req: any = {
      query: {
        i: keywords.join(',')
      }
    };

    await recipesController.index(req as Request, res as Response)

    expect(res.json).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(expectedResp);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
