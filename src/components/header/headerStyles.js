
// import { Link } from 'react-router-dom';

import styled from 'styled-components'
import { ShoppingBag } from '@styled-icons/boxicons-regular/ShoppingBag';

export const HeaderWrap = styled.header`
  height: 90px;
  position: fixed; 
  top: 0;
  margin-top: 0;
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
  margin-left: 25px;

  @media screen and (max-width: 470px) {
    font-size: 1.5em;
  }
`;

export const HeaderAmmount = styled.h4`
  color: black;  
  margin-right: 25px;
`

// export const NavLogo = styled(Link)`
//   color: #fff;
//   margin-right: 0.5rem;
//   cursor: pointer; 
// `;

// DropDown meny när klickar på kundvagn i header
//Lägg cartbox här om inte funkar i appstyles


// export const NavIcon = styled(FaShoppingCart)`
//   margin-right: 0.5rem;
// `;