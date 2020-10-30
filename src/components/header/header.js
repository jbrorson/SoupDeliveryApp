import React, { useContext } from 'react';
import { HeaderWrap, NavIcon, HeaderAmmount, ItemAmmount, HeaderCart } from './headerStyles';
import { CartContext } from '../../pages/CartContext';
import { SoupContext } from '../Soups/SoupContext';
// import { Route } from 'react-router-dom';
// import Shop from '../shop/shop';
// import { ShoppingBag } from '@styled-icons/boxicons-regular';

const Header = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce(
    (prevValue, currentValue) => prevValue + currentValue.price, 0);

  // const showCart = () => {
  //   const [cart, setCart] = useContext(CartContext);
  //   const openCart = cart.reduce(
  //     (pre, curr) => pre + curr.name, null)
  // };

  return (
    <HeaderWrap>
      <HeaderCart>
        <NavIcon />
        <ItemAmmount>{cart.length}</ItemAmmount>
      </HeaderCart>
      <HeaderAmmount>Summa: {totalPrice}</HeaderAmmount>
    </HeaderWrap>
  )
};

export default Header; 