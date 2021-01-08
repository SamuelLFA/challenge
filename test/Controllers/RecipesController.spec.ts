import { Request, Response } from 'express';

import RecipesController from '../../src/controllers/RecipesController';
import UtilsMocks from '../mocks/UtilsMock';
import RecipeMocks from '../mocks/RecipeMock';

describe('Recipes Controller', () => {
  const listOfRecipes = RecipeMocks.recipes;

  const recipesController = new RecipesController();
  const res = UtilsMocks.mockResponse(listOfRecipes);

  test('it should list recipes', async () => {
    const req: any = {
      query: {
        i: 'orlic,onion'
      }
    };

    await recipesController.index(req as Request, res as Response)

    expect(res.json).toHaveBeenCalled();
    expect(res.json).toReturnWith(listOfRecipes);
  });
});
