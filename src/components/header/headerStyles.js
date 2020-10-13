import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


export const HeaderWrap = styled.div`
  height: 80px;
  position: fixed; 
  top: 0;
  margin-top: 0;
  padding: 10px;
  width: 100%; 
  /* border: 5px solid blue;  */
  background-color: ##E8E6E6; 
  border-bottom: 1px solid black;
  display: flex; 
  /* justify-content: flex-start; */
  align-items: center;
`;

export const NavIcon = styled(FaShoppingCart)`
  justify-self: flex-start;
  cursor: pointer; 
  color: black;
  font-size: 1.8rem;
  text-decoration: none;
  display: flex; 
  align-items: center;
  margin: 1rem 1rem 0; 

  @media screen and (max-width: 470px) {
    font-size: 1.5em;
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  /* justify-self: flex-start; */
  margin-right: 0.5rem;
  cursor: pointer; 
`;

// DropDown meny när klickar på kundvagn i header
//Lägg cartbox här om inte funkar i appstyles


// export const NavIcon = styled(FaShoppingCart)`
//   margin-right: 0.5rem;
// `;