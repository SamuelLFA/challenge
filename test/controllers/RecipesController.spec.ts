import { Request, Response } from 'express';
import { AxiosInstance } from 'axios';

import RecipesController from '../../src/controllers/RecipesController';
import UtilsMocks from '../mocks/UtilsMock';
import RecipeMocks from '../mocks/RecipeMock';
import RecipesServiceMock from '../mocks/RecipesServiceMock';
import GifServiceMock from '../mocks/GifServiceMock';

describe('Recipes Controller', () => {
  const { recipesWithNoGif, recipesWithGif } = RecipeMocks;
  const keywords = ['orlic', 'onion'];
  const expectedResp = {
    keywords,
    recipes: recipesWithGif
  }

  const httpRecipesMock = UtilsMocks.httpMock(recipesWithNoGif);
  const httpGiphyMock = UtilsMocks.httpMock(recipesWithGif);
  const recipesServiceMock = new RecipesServiceMock(httpRecipesMock as AxiosInstance);
  const gifServiceMock = new GifServiceMock(httpGiphyMock as AxiosInstance);
  const recipesController = new RecipesController(recipesServiceMock, gifServiceMock);
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
