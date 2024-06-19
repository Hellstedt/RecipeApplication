import { IIngredient } from "./IIngredient";
import { IUnit } from "./IUnit";

export interface IRecipeIngredient {
    ingredient: IIngredient;
    unit: IUnit;
    quantity: number;
}