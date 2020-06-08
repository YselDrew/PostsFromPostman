import * as types from '../types';
import inititalState from './initialState';

export function postReducer(state = inititalState.post, action) {
  switch (action.type) {
    case types.LOAD_POST_BY_ID_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
