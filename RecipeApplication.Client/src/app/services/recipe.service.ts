import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from '../interfaces/IRecipe';
import { ICreateRecipe } from '../interfaces/ICreateRecipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl: string = 'https://localhost:7238/api/recipe/'

  constructor(
    private http: HttpClient,
  ) { }

  getAllRecipes() {
    return this.http.get<IRecipe[]>(`${this.baseUrl}GetAllRecipes`);
  }

  CreateRecipe(recipe:any) {
    return this.http.post<ICreateRecipe>(`${this.baseUrl}CreateRecipe`, recipe);
  }

  deleteRecipe(recipeId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}DeleteRecipe/${recipeId}`);
  }
}
