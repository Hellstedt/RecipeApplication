import { Injectable } from '@angular/core';
import { IUnit } from '../interfaces/IUnit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private baseUrl: string = 'https://localhost:7238/api/unit/'

  constructor(
    private http: HttpClient,
  ) { }

  getAllUnits() {
    return this.http.get<IUnit[]>(`${this.baseUrl}GetAllUnits`);
  }
}
