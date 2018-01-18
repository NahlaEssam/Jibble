import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as Server from '../models/BaseUrl';
import { post } from '../models/postModel';

@Injectable()
export class PostServiceService {

 
  private BASE_PATH : string = Server.url ;
  constructor(private httpClient: HttpClient) { }

  public getAllPosts(): Observable<Array<post>> {
    return this.httpClient.get<Array<post>>(`${this.BASE_PATH}/posts`);
  }

  public getPost(postId: number): Observable<Array<post>> {
    return this.httpClient.get<Array<post>>(`${this.BASE_PATH}/posts/${postId}`);
  }

  
  public addPost(): Observable<post> {
    return this.httpClient.get<post>(`${this.BASE_PATH}/post`);
  }
  
  public editPost(): Observable<post> {
    return this.httpClient.get<post>(`${this.BASE_PATH}/post`);
  }
  
  public deletePost(): Observable<post> {
    return this.httpClient.get<post>(`${this.BASE_PATH}/post`);
  }
}
