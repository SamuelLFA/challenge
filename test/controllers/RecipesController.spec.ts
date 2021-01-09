import { Request, Response } from 'express';
import { AxiosInstance } from 'axios';

import UtilsMocks from '../mocks/UtilsMock';
import RecipeMocks from '../mocks/RecipeMock';
import RecipesServiceMock from '../mocks/RecipesServiceMock';
import ServiceUnavailableMock from '../mocks/ServiceUnaivailableMock';
import GifServiceMock from '../mocks/GifServiceMock';
import RecipesController from '../../src/controllers/RecipesController';
import GifService from '../../src/services/GifService';
import RecipesService from '../../src/services/RecipesService';

describe('Recipes Controller', () => {
  const { recipesWithNoGif, recipesWithGif } = RecipeMocks;
  const keywords = ['orlic', 'onion'];
  const expectedResp = {
    keywords,
    recipes: recipesWithGif
  }
  const req: any = {
    query: {
      i: keywords.join(',')
    }
  };
  const res = UtilsMocks.mockResponse();

  test('it should return a list of recipes', async () => {
    const httpRecipesMock = UtilsMocks.httpMock(recipesWithNoGif);
    const httpGiphyMock = UtilsMocks.httpMock(recipesWithGif);
    const recipesServiceMock = new RecipesServiceMock(httpRecipesMock as AxiosInstance);
    const gifServiceMock = new GifServiceMock(httpGiphyMock as AxiosInstance);
    const recipesController = new RecipesController(recipesServiceMock, gifServiceMock);

    await recipesController.index(req as Request, res as Response)

    expect(res.json).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(expectedResp);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('it should return an internal server error', async () => {
    const recipesController = new RecipesController({} as RecipesService, {} as GifService);

    await recipesController.index(req as Request, res as Response)

    expect(res.status).toHaveBeenCalledWith(500);
  });

  test('it should return an service unavailable', async () => {
    const httpRecipesMock = UtilsMocks.httpMock(recipesWithNoGif);
    const serviceUnavailableMock = new ServiceUnavailableMock(httpRecipesMock as AxiosInstance);
    const recipesController = new RecipesController(serviceUnavailableMock, {} as GifService);

    await recipesController.index(req as Request, res as Response)

    expect(res.status).toHaveBeenCalledWith(503);
  });
});
