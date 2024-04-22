export interface IRecipe {
    id: number;
    recipeName: string;
    dateCreated: Date;
    cookingTime: number | null;
    servings: number;
    difficultyLevel: string | null;
    mealType: string | null;
    cuisineType: string | null;
    dietaryInformation: string | null;
    source: string | null;
    raiting: number | null;
    favorite: boolean;
    imageUrl: string | null;
}