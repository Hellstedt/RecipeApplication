import { IIngredient } from "./IIngredient";
import { IUnit } from "./IUnit";

export interface IRecipeIngredient {
    Ingredient: IIngredient;
    Unit: IUnit;
    quantity: number;
}