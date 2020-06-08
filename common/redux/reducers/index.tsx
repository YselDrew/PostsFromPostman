import { combineReducers } from 'redux';
import { postsReducer as posts } from './posts.reducer';
import { postReducer as post } from './post.reducer';
import { apiStatusReducer as apiCallsInProgress } from './apiStatus.reducer';

const rootReducer = combineReducers({
  posts,
  post,
  apiCallsInProgress,
});

export default rootReducer;
