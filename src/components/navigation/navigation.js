import React from 'react';
import { Link } from 'react-router-dom';
import { ChatDots } from '@styled-icons/bootstrap';
import { Restaurant } from '@styled-icons/ionicons-outline';
import { ShoppingCart } from '@styled-icons/heroicons-outline';
import { Map } from '@styled-icons/foundation';
import { NavStyles } from './navigationStyles';


function Navigation() {

  const navStyle = {
    textDecoration: 'none'
  };

  return (
    <NavStyles>
      <ul>
        <Link style={navStyle} to="/support">
          <li><ChatDots />Support</li>
        </Link>
        <Link style={navStyle} to="/menu">
          <li><Restaurant />Meny</li>
        </Link>
        <Link style={navStyle} to="/cart">
          <li><ShoppingCart />Kundvagn</li>
        </Link>
        <Link style={navStyle} to="/order">
          <li><Map />Order</li>
        </Link>
      </ul>
    </NavStyles>
  )
}

export default Navigation; 