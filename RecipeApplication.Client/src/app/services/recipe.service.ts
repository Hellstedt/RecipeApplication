import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from '../interfaces/IRecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl: string = 'https://localhost:7238/api/recipe/'

  constructor(
    private http: HttpClient,
  ) { }

  getAllRecipes() {
    return this.http.get<any>(`${this.baseUrl}GetAllRecipes`)
  }
}
