import styled from 'styled-components';

const StyledContainer = styled.div`
  box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  height: 350px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;
  width: 80%;
`;

const Title = styled.h3`
  font-family: 'Old Standard TT', serif;
  font-size: 34px;
  color: #344055;
  margin: 0;
`;

const Description = styled.p`
  font-family: 'Farsan', cursive;
  text-align: center;
  font-size: 20px;
  color: #7d7d7d;
`;

export { StyledContainer, Details, Title, Description };
