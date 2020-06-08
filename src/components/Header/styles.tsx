import styled from 'styled-components';

const StyledHeader = styled.div`
  margin: auto;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: center;
`;

const CreatePostButton = styled.button`
  background-color: rgba(255, 255, 255, 0.9); /* Green */
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
  border-radius: 5px;
  transition: 0.3s;
  outline: none;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

export { StyledHeader, CreatePostButton };
