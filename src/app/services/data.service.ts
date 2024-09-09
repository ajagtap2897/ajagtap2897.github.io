import { Injectable } from '@angular/core';
import { User } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private user: User | undefined;

  setUser(data: User) {
    this.user = data;
  }

  getUser() {
    return this.user;
  }

  clearUser = () => {
    this.user = undefined
  }
}
