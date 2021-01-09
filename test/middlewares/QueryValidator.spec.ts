import { Request, Response } from 'express';

import QueryValidator from '../../src/middlewares/QueryValidator';
import UtilsMocks from '../mocks/UtilsMock';
import RecipeMocks from '../mocks/RecipeMock';

describe('Query Validator', () => {
  const res = UtilsMocks.mockResponse();
  const nextMock = jest.fn();

  test('when 0 ingredients it should return an error', async () => {
    const req: any = {
      query: {
        i: ''
      }
    };

    QueryValidator(req as Request, res as Response, nextMock);

    expect(nextMock).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  test('when 1 ingredients it should call next', async () => {
    const req: any = {
      query: {
        i: 'orlic'
      }
    };

    QueryValidator(req as Request, res as Response, nextMock);

    expect(nextMock).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledTimes(0);
    expect(res.json).toHaveBeenCalledTimes(0);
  });

  test('when 2 ingredients it should call next', async () => {
    const req: any = {
      query: {
        i: 'orlic, onion'
      }
    };

    QueryValidator(req as Request, res as Response, nextMock);

    expect(nextMock).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledTimes(0);
    expect(res.json).toHaveBeenCalledTimes(0);
  });

  test('when 3 ingredients it should call next', async () => {
    const req: any = {
      query: {
        i: 'orlic, onion, egg'
      }
    };

    QueryValidator(req as Request, res as Response, nextMock);

    expect(nextMock).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledTimes(0);
    expect(res.json).toHaveBeenCalledTimes(0);
  });

  test('when 4 ingredients it should return an error', async () => {
    const req: any = {
      query: {
        i: 'orlic, onion, egg, milk'
      }
    };

    QueryValidator(req as Request, res as Response, nextMock);

    expect(nextMock).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
