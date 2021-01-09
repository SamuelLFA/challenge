import { AxiosInstance } from 'axios';

import GifService from '../../src/services/GifService';
import UtilsMocks from '../mocks/UtilsMock';
import RecipeMocks from '../mocks/RecipeMock';
import GiphyMock from '../mocks/GiphyMock';

describe('Gif Service', () => {
  const { recipesWithNoGif, recipesWithGif } = RecipeMocks;
  const mockResponse = {
    data: GiphyMock
  }

  test('it should return a list of recipes with gif', async () => {
    const httpMock = UtilsMocks.httpMock(mockResponse);
    const recipesService = new GifService(httpMock as AxiosInstance);

    const response = await recipesService.getListOfRecipesWithGit(recipesWithNoGif);

    expect(response).toBeInstanceOf(Array);
    expect(response).toStrictEqual(recipesWithGif);
  });

  test('it should return an empty list', async () => {
    const httpMock = UtilsMocks.httpMock(mockResponse);
    const recipesService = new GifService(httpMock as AxiosInstance);

    const response = await recipesService.getListOfRecipesWithGit([]);

    expect(response).toBeInstanceOf(Array);
    expect(response).toStrictEqual([]);
  });
});
