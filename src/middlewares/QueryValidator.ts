
import { Request, Response, NextFunction } from 'express';
import QueryValidation from '../schemas/RecipesSchema';

export default (
  request: Request,
  response: Response,
  next: NextFunction,
): Response | void => {
  const validateQueryParams = QueryValidation.validate(request.query);

  return validateQueryParams.error
    ? response.status(400).json({ error: validateQueryParams.error?.message })
    : next();
};