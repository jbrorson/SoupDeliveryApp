import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)'
}

export const NavStyles = styled.div`
  width: 100%; 
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  background-color: #32936F; 
  height: 80px;
  position: sticky; 
  margin-bottom: 0 auto;
  bottom: 0;
  padding: 0 auto;

`;

export const NavIcons = styled.div`
  display: flex;
  justify-content: space-evenly; 
  align-items: center;
  height: 100%;
  width: 100%;
  border-top: 2px solid darkgreen;
  color: white;
`;
      
export const Icons = styled.li`
  width: 40px;
  margin: 1em;
  padding: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  /* border: 1px solid; */
  color: #fff;
`;
