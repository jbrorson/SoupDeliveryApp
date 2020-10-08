import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const SoupWrap = styled.div`
  width: 100%; 
  border: 5px solid orange; 
  display: flex; 
  flex-flow: column nowrap;
  justify-content: center; 
  align-items: center; 

  ${media.desktop} {
    width: 1000px; 
  }
    .SoupImg {
      width: 100%; 
      height: 200px; 
      background-color: gray; 

      ${media.desktop} {
        width: 48%; 
      }
    }
    .info {
      margin-top: 10px; 
      width: 100%;
      height: 200px; 
      background-color: pink; 

      ${media.desktop} {
        margin: 0;
        width: 48%;
      }
    }
  
`;