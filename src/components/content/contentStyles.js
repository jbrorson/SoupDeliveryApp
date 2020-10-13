import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const ContentWrap = styled.div`
  margin-top: 4rem;
  height: 90%;
  width: 100%; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  background-color: #E8E6E6;

  ${media.desktop} {
    width: 400px; 
  }

  /* h3 {
    font-size: 20px; 
    font-weight: bold; 
    color: black;
    margin: 10px;
  }

  .boxWrap {
    width: 88%; 
    height: 100%;

    ${media.desktop} {
      display: flex;
      flex-flow: row nowrap;
      align-items: center; 
      justify-content: space-between;
    }

    .img {
      width: 100%; 
      height: 50%; 
      padding: 5px;
      background-color: gray; 

      ${media.desktop} {
        width: 48%; 
      }
    }

    .cont {
      width: 100%;
      height: 50%; 
      padding: 5px;
      background-color: pink; 
      justify-content: center;

      ${media.desktop} {
        margin: 0;
        width: 48%;
      }
    }
  } */
`;