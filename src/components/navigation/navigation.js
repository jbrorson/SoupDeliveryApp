import React from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

// import SoupCard from '../content/soupCard';
// import Shop from '../shop/shop';
// import Menu from '../../pages/Menu';
// import Support from '../../pages/Support';
// import Cart from '../../pages/Cart';
// import Order from '../../pages/Order';
import { ChatDots } from '@styled-icons/bootstrap';
import { Restaurant } from '@styled-icons/ionicons-outline';
import { ShoppingCart } from '@styled-icons/heroicons-outline';
import { Map } from '@styled-icons/foundation';

import { NavStyles } from './navigationStyles';
// import GlobalStyle from '../../globalStyles';

function Navigation() {

  const navStyle = {
    textDecoration: 'none'
  };

  return (
    <NavStyles>
      {/* <Route path="/menu" component={Menu} />
        <Route exakt path="/cart" component={Cart} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/order" component={Order} /> */}
      <ul>
        <Link style={navStyle} to="/support">
          <li><ChatDots />Support</li>
        </Link>
        <Link style={navStyle} to="/SoupCard">
          <li><Restaurant />Meny</li>
        </Link>
        <Link style={navStyle} to="/Cart">
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