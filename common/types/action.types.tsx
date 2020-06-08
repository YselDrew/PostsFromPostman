import { IPostData } from '../interfaces/posts.interface';

type BeginApiCall = { type: string };
type ApiCallError = { type: string };

type LoadPostByIdSuccess = { type: string; payload: IPostData };

type CreatePostSuccess = { type: string; payload: IPostData };
type LoadPostsSuccess = { type: string; payload: IPostData[] };

export type ActionTypes =
  | BeginApiCall
  | ApiCallError
  | LoadPostByIdSuccess
  | CreatePostSuccess
  | LoadPostsSuccess;
