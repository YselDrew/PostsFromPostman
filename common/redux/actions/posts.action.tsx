import * as types from '../types';
import { ActionTypes } from '../../types/action.types';
import { IPostData } from '../../interfaces/posts.interface';

import axios from 'axios';
import { apiCallError, beginApiCall } from './apiStatus.action';

export function loadPostsSuccess(posts: IPostData[]): ActionTypes {
  return { type: types.LOAD_POSTS_SUCCESS, payload: posts };
}

export function createPostSuccess(post: IPostData): ActionTypes {
  return { type: types.CREATE_POST_SUCCESS, payload: post };
}

export const createPost = (url: string, post: IPostData) => (dispatch) => {
  dispatch(beginApiCall());
  axios
    .post(url, post)
    .then((response) => dispatch(createPostSuccess(response.data)))
    .catch((error) => {
      dispatch(apiCallError());
      throw error;
    });
};

export const fetchPosts = (url: string) => (dispatch) => {
  dispatch(beginApiCall());
  axios
    .get(url)
    .then((response) => dispatch(loadPostsSuccess(response.data)))
    .catch((error) => {
      dispatch(apiCallError());
      throw error;
    });
};
