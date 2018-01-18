import { Component } from '@angular/core';
import { UserServiceService } from './shared/services/user-service.service';
import { AlbumServiceService } from './shared/services/album-service.service';
import { PostServiceService } from './shared/services/post-service.service';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { retry } from 'rxjs/operator/retry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public serverError: boolean = false;
  public data =[];
  constructor(private albumService:AlbumServiceService , private postService:PostServiceService , private userService:UserServiceService ){
 
    this.data = [];
    this.postService.getAllPosts().subscribe(res=>{
      for(let i =0 ; i<30;i++){
         this.getData(res[i]).subscribe(res=>{
            console.log(res);
            this.data.push(res);
          });
      }
    }, error=>{
      console.log(error);
      this.serverError = true;
    })


    
  }
   getData(post): Observable<any>{
   
      return Observable.forkJoin([
        this.userService.getUser(post.userId).map((res: any) => res),
        this.albumService.getAlbumByUserID(post.userId).map((res: any) => res)
      ])
      .map((data: any[]) => {
        let result : any = {post:'', album: '' , user : ''};
        let user = data[0];
        let album = data[1][0];
        result.post = post;
        result.user = user;
        result.album = album;
        return result;
        
      });
    
   }   
}
