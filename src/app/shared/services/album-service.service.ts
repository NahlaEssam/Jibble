import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { album } from '../models/albumModel';
import * as Server from '../models/BaseUrl';

@Injectable()
export class AlbumServiceService {
  private BASE_PATH : string = Server.url ;
  
  constructor( private httpClient: HttpClient ) { }

  public getAllAlbums(): Observable<Array<album>> {
    return this.httpClient.get<Array<album>>(`${this.BASE_PATH}/albums`);
  }

  public getAlbumByUserID(userId: number): Observable<Array<album>> {
    return this.httpClient.get<Array<album>>(`${this.BASE_PATH}/albums?userId=${userId}`);
  }
  
  public addAlbum(): Observable<album> {
    return this.httpClient.get<album>(`${this.BASE_PATH}/album`);
  }
  
  public editAlbum(): Observable<album> {
    return this.httpClient.get<album>(`${this.BASE_PATH}/album`);
  }
  
  public deleteAlbum(): Observable<album> {
    return this.httpClient.get<album>(`${this.BASE_PATH}/album`);
  }
  
}
