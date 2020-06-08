import styled from 'styled-components';

const FormContainer = styled.div`
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const StyledForm = styled.form`
  border-radius: 5px;
  background: #f9f9f9;
  padding: 25px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const StyledH3 = styled.h3`
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 95%;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #fff;
  padding: 10px;
  outline: none;
`;

const StyledTextArea = styled.textarea`
  width: 95%;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #fff;
  padding: 10px;
  height: 100px;
  max-width: 100%;
  resize: none;
  outline: none;
`;

const StyledFieldSet = styled.fieldset`
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: 40%;
  border: none;
  background: #49c608;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  outline: none;
  &:disabled {
    background: #9dd481;
    cursor: default;
  }
`;

export { FormContainer, StyledForm, StyledH3, StyledInput, StyledTextArea, StyledFieldSet, StyledButton };
