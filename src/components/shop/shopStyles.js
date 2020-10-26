import styled from 'styled-components';

export const ShopWrap = styled.div`
  height: 100vh; 
  width: 100%;
  padding: 25px;
`;

export const CartCard = styled.div`
  width: 100%;
  height: 440px;
  margin-top: 100px;
  padding: 30px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px; 
`;

export const CartHeading = styled.h1`
  margin: 10px;
  display: flex;
  justify-content: center;
`

export const CartItems = styled.div`
  margin: 25px;
  height: 100px; 
  margin-left: 20px;
`;

export const CartBtn = styled.input`
  width: 30px;
  height: 30px;
  /* font-size: 20px;  */
  background-color: #32936F;
  border-radius: 4px;
  color: #fff;
  border: 0;
  margin-right: 20px;
`;
  // input{
  //   margin-left: 5px;
  //   border: 2px solid gray;
  //   border-radius: 50%;
  //   height: 30px; 
  //   width: 30px;
  // }

  // p{
  //   margin: 10px 0;
  //   font-weight: bold;
  // }


// om jag vill byta ut input-knapp till en ikon: 
// import { IconName } from "react-icons/gr";
// GrAddCircle

