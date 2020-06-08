import React from 'react';
import Link from 'next/link';

import { StyledHeader, CreatePostButton } from './styles';

export function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <CreatePostButton>Show Posts</CreatePostButton>
      </Link>
      <Link href="/posts/new">
        <CreatePostButton>Create Post</CreatePostButton>
      </Link>
    </StyledHeader>
  );
}
