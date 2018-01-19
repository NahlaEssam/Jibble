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
  
  public addAlbum(album:any): Observable<album> {
    return this.httpClient.post<album>(`${this.BASE_PATH}/albums`, album);
  }
  
  public editAlbum(modifiedAlbum: album): Observable<album> {
    return this.httpClient.put<album>(`${this.BASE_PATH}/albums`, modifiedAlbum );
  }
  
  public deleteAlbum(albumId: number): Observable<{}> {
    return this.httpClient.delete<{}>(`${this.BASE_PATH}/albums/${albumId}`);
  }
  
}
