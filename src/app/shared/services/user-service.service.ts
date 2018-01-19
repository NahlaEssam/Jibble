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
  public getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.BASE_PATH}/users/${userId}`);
  }
  
  public addUser(user: any): Observable<User> {
    return this.httpClient.post<User>(`${this.BASE_PATH}/users`, user);
  }
  
  public editUser(modifiedUser: User): Observable<User> {
    return this.httpClient.put<User>(`${this.BASE_PATH}/users`, modifiedUser);
  }
  
  public deleteUser(userId: number): Observable<{}> {
    return this.httpClient.delete<{}>(`${this.BASE_PATH}/users/${userId}`);
  }
}
