import { Injectable, signal } from '@angular/core';
import { IUser } from '../interfaces/Iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUseSignal = signal<IUser | undefined | null>(undefined);

  constructor() { }
}
