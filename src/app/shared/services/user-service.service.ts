import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as Server from '../models/BaseUrl';
import { User } from '../models/userModel';


@Injectable()
export class UserServiceService {

  private BASE_PATH : string = Server.url ;
  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(`${this.BASE_PATH}/users`);
  }
  public getUser(userId: number): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(`${this.BASE_PATH}/users/${userId}`);
  }
  
  public addUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.BASE_PATH}/user`);
  }
  
  public editUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.BASE_PATH}/user`);
  }
  
  public deleteUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.BASE_PATH}/user`);
  }
}
