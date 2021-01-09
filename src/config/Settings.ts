import * as env from 'env-var';

export default {
    recipePuppyApiURL: env.get('RECIPE_PUPPY_API_URL').required().asString()
}