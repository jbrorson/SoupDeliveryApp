import styled from 'styled-components';

// const media = {
//   desktop: '@media(min-width: 1000px)'
// }

export const AppWrap = styled.div`
  height: 1000px; 
  /* border: 5px solid red;  */
  display: flex; 
  flex-flow: column nowrap;
  justify-content: center; 
  align-items: center; 

  li{
    list-style: none;
    display: flex;
    align-items: center; 
  }
  a{
    color: black;
    text-decoration: none;
  }
`;

export const CartBox = styled.div`
  position: relative;
  width: 400px;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: 2px 0px 5px black;
`;