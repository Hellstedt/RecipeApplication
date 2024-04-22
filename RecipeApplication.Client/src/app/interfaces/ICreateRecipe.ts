export interface ICreateRecipe {
    recipeName: string;
    cookingTime: number;
    servings: number;
    difficultyLevel: string;
    mealType: string;
    cuisineType: string;
    dietaryInformation: string;
    source: string;
    raiting: number;
    favorite: boolean;
}