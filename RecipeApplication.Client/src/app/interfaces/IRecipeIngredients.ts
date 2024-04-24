import { IIngredient } from "./IIngredient";
import { IUnit } from "./IUnit";

export interface IRecipeIngredients {
    id: number;
    ingredientId: number;
    ingredient: IIngredient;
    unitId: Number;
    unit: IUnit;
    quantity: number;
}