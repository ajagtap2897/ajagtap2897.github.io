import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RESTService } from '../app.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private router: Router, private httpService: RESTService, private dataService: DataService) { }

  signup(name: string, email: string): void {
    let requestData = {
      "name": name,
      "email": email
    }

    this.httpService.createData("users", requestData).subscribe(data=>{
      let user = {
        "_id": data['_id'],
        "email": data['email'],
        "name": data['name'],
        "profile_pic": data['profile_pic']
      }
      this.dataService.setUser(user)
      this.isLoggedIn = true;
      this.router.navigate(['/main']);
    })
  }

  login(email: string): void {

    this.httpService.getData("users/"+encodeURI(email)).subscribe(data=>{
      let user = {
        "_id": data['id'],
        "email": data['email'],
        "name": data['name'],
        "profile_pic": data['profile_pic']
      }
      this.dataService.setUser(user)
      this.isLoggedIn = true;
      this.router.navigate(['/main']);
    })
  }

  logout(): void {
    this.isLoggedIn = false;
    this.dataService.clearUser()
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
