import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;

const StyledContainer = styled.div`
  box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin: auto;
  width: 90%;
  min-height: 350px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 20px;
  height: 100%;
  width: 80%;
`;

const Title = styled.h3`
  font-family: 'Old Standard TT', serif;
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 34px;
  color: #344055;
`;

const Description = styled.p`
  font-family: 'Farsan', cursive;
  text-align: center;
  font-size: 20px;
  margin-bottom: 50px;
  color: #7d7d7d;
`;

export { CardWrapper, StyledContainer, Details, Title, Description };
