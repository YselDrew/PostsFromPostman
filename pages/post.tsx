import React, { useEffect, FunctionComponent } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById } from '../common/redux/actions/post.action';

import { IPostData } from '../common/interfaces/posts.interface';
import { RootState } from '../common/interfaces/rootState.interface';

import Spinner from '../src/components/Spinner/index';

import { StyledContainer, Details, Title, Description } from './styles';

function Post({ id }) {
  const dispatch = useDispatch();
  const post: IPostData = useSelector((state: RootState) => state.post);
  const apiCallsInProgress: number = useSelector((state: RootState) => state.apiCallsInProgress);

  const isLoading: boolean = apiCallsInProgress > 0;

  useEffect(() => {
    dispatch(fetchPostById(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`));
  }, []);

  return (
    <StyledContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <Details>
          <Title>{post.title}</Title>
          <Description>{post.body}</Description>
        </Details>
      )}
    </StyledContainer>
  );
}

Post.getInitialProps = ({ query }) => {
  return { id: query.postId };
};

export default Post;
