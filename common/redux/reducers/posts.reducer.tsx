import * as types from '../types';
import inititalState from './initialState';

export function postsReducer(state = inititalState.posts, action) {
  switch (action.type) {
    case types.CREATE_POST_SUCCESS:
      return [...state, { ...action.payload }];
    case types.LOAD_POSTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
