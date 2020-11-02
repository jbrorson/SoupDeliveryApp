import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 900px)'
}

export const Container = styled.section`
  height: 100vh;
  display: flex; 
  align-items: center; 
  justify-content: center;
  flex-direction: column;
`;

export const Heading = styled.h2`
  display: flex; 
  justify-content: center; 
`;

export const BackToStart = styled.button`
  padding: 10px;
  display: flex;
  justify-content: center; 
  margin-top: 40px;
  border-radius: 5px;
  border: none; 
  background-color: #32936F;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 13px;
`;