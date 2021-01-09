import { AxiosInstance } from 'axios';

import settings from '../config/Settings';
import IRecipe from '../models/Recipe';

interface IRecipePuppy {
    title: String,
    href: String,
    ingredients: String,
    thumbnail: String
}

export default class RecipeService {
    private http: AxiosInstance;

    constructor(http: AxiosInstance) {
        this.http = http;
    }

    async getRecipes(listOfIngredients: Array<String>): Promise<Array<IRecipe>> {
        const params = {
            i: listOfIngredients.join(','),
            p: 1
        }

        const response = await this.http.get(settings.recipePuppyApiURL, { params });

        const recipes = response.data.results.map((recipe: IRecipePuppy): IRecipe => (
            {
                title: recipe.title,
                ingredients: recipe.ingredients,
                link: recipe.href,
                gif: null
            }
        ));

        return recipes;
    }
}