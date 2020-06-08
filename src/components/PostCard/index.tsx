import React from 'react';
import Link from 'next/link';

import { StyledContainer, Details, Title, Description } from './styles';

export function PostCard({ post }) {
  const maxAmountOfChars = 200;
  return (
    <Link href={{ pathname: '/post', query: { postId: post.id } }} as={`/post/${post.id}`}>
      <StyledContainer>
        <Details>
          <Title>{post.title}</Title>
          <Description>
            {post.body.length > maxAmountOfChars
              ? `"${post.body.substring(0, maxAmountOfChars)}..."`
              : `"${post.body}"`}
          </Description>
        </Details>
      </StyledContainer>
    </Link>
  );
}
