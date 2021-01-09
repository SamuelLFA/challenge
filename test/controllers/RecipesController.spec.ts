import { Request, Response } from 'express';

import RecipesController from '../../src/controllers/RecipesController';
import UtilsMocks from '../mocks/UtilsMock';
import RecipeMocks from '../mocks/RecipeMock';

describe('Recipes Controller', () => {
  const recipes = RecipeMocks.recipes;
  const keywords = ['orlic', 'onion'];
  const expectedResp = {
    keywords,
    recipes
  }

  const recipesController = new RecipesController();
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
