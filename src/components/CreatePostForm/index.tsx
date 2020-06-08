import React from 'react';

import {
  FormContainer,
  StyledForm,
  StyledH3,
  StyledInput,
  StyledTextArea,
  StyledFieldSet,
  StyledButton,
} from './styles';

export function CreatePostForm({ post, handleChange, handleSave, isSaving }) {
  return (
    <FormContainer>
      <StyledForm>
        <StyledH3>Create Post</StyledH3>
        <StyledFieldSet>
          <StyledInput
            name="title"
            value={post.title}
            placeholder="Write title"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </StyledFieldSet>
        <StyledFieldSet>
          <StyledTextArea
            name="body"
            value={post.body}
            placeholder="Write Description Here"
            onChange={(e) => handleChange(e)}
          />
        </StyledFieldSet>
        <StyledFieldSet>
          <StyledButton onClick={(e) => handleSave(e)} disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save'}
          </StyledButton>
        </StyledFieldSet>
      </StyledForm>
    </FormContainer>
  );
}
