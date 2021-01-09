import { AxiosInstance } from 'axios';

import Settings from '../config/Settings';
import Recipe from '../models/Recipe';

interface IRecipePuppy {
    title: String,
    href: String,
    ingredients: String,
    thumbnail: String
}

export default class RecipesService {
    private http: AxiosInstance;

    constructor(http: AxiosInstance) {
        this.http = http;
    }

    async getRecipes(listOfIngredients: Array<String>): Promise<Array<Recipe>> {
        try {
            const params = {
                i: listOfIngredients.join(','),
                p: 1
            }

            const response = await this.http.get(Settings.recipePuppyApiURL, { params });

            const recipes = response.data.results.map((recipe: IRecipePuppy): Recipe => (
                {
                    title: recipe.title,
                    ingredients: recipe.ingredients,
                    link: recipe.href,
                    gif: null
                }
            ));

            return recipes;
        } catch (error) {
            throw new Error('SERVICE UNAVAILABLE');
        }
    }
}