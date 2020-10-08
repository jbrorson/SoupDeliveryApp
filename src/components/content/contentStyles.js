import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const ContentWrap = styled.div`
 margin-top: 6rem;
  height: 100%;
  width: 100%; 
  margin-bottom: 10px;
  padding: 0;
  /* border: 5px solid green;  */
  display: flex; 
  flex-flow: column nowrap;
  justify-content: center; 
  align-items: center; 

  ${media.desktop} {
    width: 1000px; 
  }

  h3 {
    font-size: 20px; 
    font-weight: bold; 
    color: black;
    margin: 10px;
  }

  .boxWrap {
    width: 88%; 
    /* border: 5px solid yellow; */
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
  }
`;