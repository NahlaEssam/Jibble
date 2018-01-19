import { post } from "./postModel";
import { User } from "./userModel";
import { album } from "./albumModel";

export interface JibbleItem{
      post: post,
      user: User,
      album: album
}