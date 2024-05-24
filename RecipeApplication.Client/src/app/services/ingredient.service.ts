import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISelectIngredient } from '../interfaces/ISelectIngredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private baseUrl: string = 'https://localhost:7238/api/ingredient/'

  constructor(
    private http: HttpClient,
  ) { }

  getAllIngredients() {
    return this.http.get<ISelectIngredient[]>(`${this.baseUrl}GetAllIngredients`);
  }
}
