import styled from 'styled-components';

export const ShopWrap = styled.div`
  margin: 2rem;
  padding: 10px; 
  background: whitesmoke;
  box-shadow: 2px 2px 2px 2px gray;

  h1{
    margin: 10px 0;
    font-size: 1.1rem;
  }
  
  input{
    margin-left: 5px;
    border: 2px solid gray;
    border-radius: 50%;
    height: 30px; 
    width: 30px;
  }

  p{
    margin: 10px 0;
    font-weight: bold;
  }
`;


// om jag vill byta ut input-knapp till en ikon: 
// import { IconName } from "react-icons/gr";
// GrAddCircle