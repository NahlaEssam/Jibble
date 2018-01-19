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
  
  public addPost(post:any): Observable<post> {
    return this.httpClient.post<post>(`${this.BASE_PATH}/posts`, post);
  }
  
  public editPost(modifiedPost: post): Observable<post> {
    return this.httpClient.put<post>(`${this.BASE_PATH}/posts/${modifiedPost.id}`, modifiedPost);
  }
  
  public deletePost(postId: number): Observable<{}> {
    return this.httpClient.delete<{}>(`${this.BASE_PATH}/posts/${postId}`);
  }
}
