import { AxiosInstance } from 'axios';

import Settings from '../config/Settings';
import Recipe from '../models/Recipe';

export default class GifService {
    private http: AxiosInstance;

    constructor(http: AxiosInstance) {
        this.http = http;
    }

    async getListOfRecipesWithGit(listOfRecipes: Array<Recipe>): Promise<Array<Recipe>> {
        const getGifPromisse = async (recipe: Recipe): Promise<String> => await this.getGif(recipe.title);

        const listOfGifPromisses = listOfRecipes.map(recipe => getGifPromisse(recipe));
        const listOfGifs = await Promise.all(listOfGifPromisses);

        return this.recipesWithGif(listOfGifs, listOfRecipes);
    }

    async getGif(title: String): Promise<String> {
        const params = {
            api_key: Settings.giphyApiKey,
            limit: 1,
            q: title
        }

        const response = await this.http.get(Settings.giphyApiURL, { params });
        const { images } = response?.data?.data[0];

        return images?.original?.url;
    }

    recipesWithGif(listOfGifs: Array<String>, listOfRecipes: Array<Recipe>): Array<Recipe> {
        return listOfRecipes.map((recipe, i): Recipe => {
            return {
                ...recipe,
                gif: listOfGifs[i]
            }
        })
    }
}