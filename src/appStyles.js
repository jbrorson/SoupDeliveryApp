import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 900px)'
}

// const media = {
//   desktop: '@media(min-width: 1000px)'
// } Lägg till mediaquery när det är dags att ändra utseendet för större devices 
// tx sopporna i presenteras två och två

export const AppWrap = styled.div`
  background-color: #E8E6E6;
  display: flex; 
  flex-flow: nowrap;
  justify-content: center; 
  align-items: center; 

  ${media.desktop} {
    display: flex; 
    flex-direction: row;
    flex-wrap: row wrap;
    justify-content: space-evenly;
  } 
`;

