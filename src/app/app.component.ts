import { Component } from '@angular/core';
import { UserServiceService } from './shared/services/user-service.service';
import { AlbumServiceService } from './shared/services/album-service.service';
import { PostServiceService } from './shared/services/post-service.service';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { retry } from 'rxjs/operator/retry';
import { JibbleItem } from './shared/models/itemModel';
import { User } from './shared/models/userModel';
import { album } from './shared/models/albumModel';
import { post } from './shared/models/postModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public serverError: boolean = false;
  public data: Array<JibbleItem> = [];

  constructor(private albumService: AlbumServiceService, private postService: PostServiceService, private userService: UserServiceService) {
    this.init();
  }
  
  init() {
    this.data = [];
    this.postService.getAllPosts().subscribe(res => {
      this.resetServerError();
      for (let i = 0; i < 30; i++) {
        this.getData(res[i]).subscribe(res => {
          this.resetServerError();
          this.data.push(res);
        }, this.handleError);
      }
    }, this.handleError)

  }
  getData(post: post): Observable<JibbleItem> {

    return Observable.forkJoin([
      this.userService.getUser(post.userId).map((res: User) => res),
      this.albumService.getAlbumByUserID(post.userId).map((res: album[]) => res)
    ])
      .map((data: any[]) => {
        let user: User = data[0];
        let album: album = data[1][0];
        let result: JibbleItem = { post: post, album: album, user: user };
        return result;

      });

  }
  deleteItem(item: JibbleItem) {
    let textMessage = "Are you sure you want to delete this combination ?";
    if (confirm(textMessage)) {
      let index = this.data.findIndex(res => {
        return res.user.id == item.user.id && res.post.id == item.post.id && res.album.id == item.album.id
      })
      if (index != -1) {
        this.data.splice(index, 1);
      }
    }
  }

  editPostTitle(item: JibbleItem) {
    let txt: string;
    let textMessage = "Edit post title:"
    var title = prompt(textMessage, item.post.title);
    if (title !== null || title !== "") {
      txt = title;
      item.post.title = txt;
      this.postService.editPost(item.post).subscribe(res => {
        this.resetServerError();
        if (res) {
          item.post = res;
        }
      }, this.handleError)

    }
  }
  handleError(error){
    this.serverError = true;
  }
  resetServerError(){
    this.serverError = false;
  }
}
