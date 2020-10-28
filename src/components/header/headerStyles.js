import styled from 'styled-components'
import { ShoppingBag } from '@styled-icons/boxicons-regular/ShoppingBag';

export const HeaderWrap = styled.header`
  height: 90px;
  position: fixed; 
  top: 0;
  width: 100%; 
  background-color: #E8E6E6; 
  border-bottom: 1px solid #C4C4C4;
  display: flex; 
  align-items: center;
  justify-content: space-between;
`;

export const NavIcon = styled(ShoppingBag)`
  cursor: pointer; 
  color: black;
  height: 35px;
  width: 35px;
  display: flex; 
  align-items: center; 

  @media screen and (max-width: 470px) {
    font-size: 1.5em;
  }
`;

export const HeaderAmmount = styled.h4`
  color: black;  
  margin-right: 25px;
`
export const ItemAmmount = styled.p`
  font-weight: bold;
  width: 50%;
`;

export const HeaderCart = styled.section`
  height: 100%;
  width: 50%;
  display: flex; 
  justify-content: center;
  padding: 20px;
`;
