import { IPostData } from './posts.interface';

export interface RootState {
  posts: IPostData[];
  post: IPostData;
  apiCallsInProgress: number;
}
