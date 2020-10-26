import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const NavStyles = styled.div`
  width: 100%; 
  display: flex;
  align-items: center; 
  background-color: #32936F; 
  height: 60px;
  position: fixed; 
  margin-bottom: 0 auto;
  bottom: 0;
  padding: 0 auto;
  margin-top: 80px;

  ${media.desktop} {
      height: 80px;
      margin: 10px 10px;
    }

  ul{
    height: 100%;
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    }

  li{
    height: 100%;
    color: whitesmoke;
    display: flex; 
    align-items: center;
    justify-content: space-evenly;
    flex-flow: column nowrap;
    margin: 5px; 
    padding: 5px;
  }

  svg{
    height: 30px;
    width: 30px;

      ${media.desktop} {
      height: 40px;
      width: 40px;
    }
  }

  a{
    color: whitesmoke;
  }
`;
