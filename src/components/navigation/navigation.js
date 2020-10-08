import React from 'react';

import { ChatDots } from '@styled-icons/bootstrap';
import { Restaurant } from '@styled-icons/ionicons-outline';
import { ShoppingCart } from '@styled-icons/heroicons-outline'; 
import { Map } from '@styled-icons/foundation';

import { NavStyles } from './navigationStyles';
// import GlobalStyle from '../../globalStyles';

function Navigation(){
  return(
    <NavStyles>
      <ul>
        <li>
          <a href=""><ChatDots /></a>Kontakt</li>
        <li>
          <a href=""><Restaurant /></a>Meny</li>
        <li>
          <a href=""><ShoppingCart /></a>Kundvagn</li>
        <li>
          <a href=""><Map /></a>Order</li>
      </ul>
    </NavStyles>
  )
}

export default Navigation; 