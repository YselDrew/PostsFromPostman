import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../common/interfaces/rootState.interface';
import { IPostData } from '../../common/interfaces/posts.interface';

import { createPost } from '../../common/redux/actions/posts.action';
import { CreatePostForm } from '../../src/components/CreatePostForm/index';

function NewPost() {
  const dispatch = useDispatch();

  const [post, setPost] = useState({ title: '', body: '' });
  const [errors, setErrors] = useState({});

  const apiCallsInProgress: number = useSelector((state: RootState) => state.apiCallsInProgress);

  const isSaving: boolean = apiCallsInProgress > 0;

  function handleChange(event) {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    const newPost: IPostData = {
      title: post.title,
      body: post.body,
    };
    dispatch(createPost('https://simple-blog-api.crew.red/posts', newPost));
    setPost({
      title: '',
      body: '',
    });
  }

  function formIsValid() {
    const { title, body } = post;
    const errors: { title?: string; body?: string } = {};

    if (!title) errors.title = 'Title is required';
    if (!body) errors.body = 'Body is required';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  return <CreatePostForm post={post} handleSave={handleSave} handleChange={handleChange} isSaving={isSaving} />;
}

export default NewPost;
