import styled from 'styled-components';

// const media = {
//   desktop: '@media(min-width: 1000px)'
// }

export const NavStyles = styled.div`
  width: 100%; 
  display: flex;
  /* justify-content: space-around; */
  align-items: center; 
  background-color: #32936F; 
  height: 80px;
  position: sticky; 
  margin-bottom: 0 auto;
  bottom: 0;
  padding: 0 auto;

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
    margin: 10px; 
    padding: 10px;
  }

  svg{
    height: 30px;
    width: 30px;
  }

  a{
    color: whitesmoke;
  }

  a:hover{
    font-size:1.8rem;
    /* transition: 1s ease-in; */
  }
`;
