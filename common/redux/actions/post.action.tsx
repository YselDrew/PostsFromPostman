import * as types from '../types';
import { IPostData } from '../../interfaces/posts.interface';
import { ActionTypes } from '../../types/action.types';

import axios from 'axios';
import { apiCallError, beginApiCall } from './apiStatus.action';

export function loadPostByIdSuccess(post: IPostData): ActionTypes {
  return { type: types.LOAD_POST_BY_ID_SUCCESS, payload: post };
}

export const fetchPostById = (url: string) => (dispatch) => {
  dispatch(beginApiCall());
  axios
    .get(url)
    .then((response) => dispatch(loadPostByIdSuccess(response.data)))
    .catch((error) => {
      dispatch(apiCallError());
      throw error;
    });
};
