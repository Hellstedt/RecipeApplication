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
    return this.http.post<any>(`${this.baseUrl}CreateRecipe`, recipe);
  }
}
