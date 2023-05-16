import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/components/Model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient, private roter: Router) { }
  baseUrl = 'http://localhost:9090';
  userUrl = 'users';


  async loginUser(userData: UserModel) {

  }

  findUser(email: any) {
    return this.http.get(`${this.baseUrl}/users/getUser/${email}`);
  }

  // async getAllUsers({

  // })

}
