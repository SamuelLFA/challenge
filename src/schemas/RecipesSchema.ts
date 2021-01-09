import Joi from 'joi';

export default Joi.object({
  i: Joi
    .string()
    .pattern(/^([\s*\w+\s*]+,*){1,3}$/)
      .message('[i]: It must be an array of 3 words')
    .required()
});