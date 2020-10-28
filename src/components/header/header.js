import React, { useContext } from 'react';
import { HeaderWrap, NavIcon, HeaderAmmount } from './headerStyles';
import { CartContext } from '../../pages/CartContext';
import { SoupContext } from '../Soups/SoupContext';
// import { Route } from 'react-router-dom';
// import Shop from '../shop/shop';
// import { ShoppingBag } from '@styled-icons/boxicons-regular';

const Header = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce(
    (prevValue, currentValue) => prevValue + currentValue.price, 0);

  return (
    <HeaderWrap>
      <NavIcon />
      <p>{cart.length}</p>
      <HeaderAmmount>Summa: {totalPrice}</HeaderAmmount>
    </HeaderWrap>
  )
};

export default Header; 