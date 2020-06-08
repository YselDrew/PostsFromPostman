import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../common/redux/actions/posts.action';

import { IPostData } from '../common/interfaces/posts.interface';
import { RootState } from '../common/interfaces/rootState.interface';

import { PostCard } from '../src/components/PostCard';
import { CardWrapper } from './styles';

function Posts() {
  const dispatch = useDispatch();
  const posts: IPostData[] = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts('https://simple-blog-api.crew.red/posts'));
  }, []);

  return (
    <CardWrapper>
      {posts.map((post: IPostData) => (
        <PostCard key={post.id} post={post} />
      ))}
    </CardWrapper>
  );
}

export default Posts;
