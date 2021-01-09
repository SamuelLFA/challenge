import * as env from 'env-var';

export default {
    recipePuppyApiURL: env.get('RECIPE_PUPPY_API_URL').required().asString(),
    giphyApiURL: env.get('GIPHY_API_URL').required().asString(),
    giphyApiKey: env.get('GIPHY_API_KEY').required().asString(),
}