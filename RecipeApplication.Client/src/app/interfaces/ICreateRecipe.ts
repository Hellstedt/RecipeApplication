import { IInstruction } from "./IInstruction";
import { IRecipeIngredient } from "./IRecipeIngredient";

export interface ICreateRecipe {
    recipeName: string;
    cookingTime: number;
    servings: number;
    instrcuctions: IInstruction[];
    recipeIngredients: IRecipeIngredient[];
    difficultyLevel: string;
    mealType: string;
    cuisineType: string;
    dietaryInformation: string;
    imageUrl: string;
    source: string;
    raiting: number;
    favorite: boolean;
}