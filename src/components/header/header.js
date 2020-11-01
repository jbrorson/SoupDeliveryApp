import React, { useContext, useState } from 'react';
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

  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(prev => !prev);
    console.log('clicked');

    // var openPopup = false;
    // if (openPopup) {
    //   console.log('JA');
    // } else {
    //   console.log('nej');
    // }
  }

  // Har ej testad nedanstående kod på ett tag... funkar nog inte
  // const showCart = () => {
  //   const [cart, setCart] = useContext(CartContext);
  //   const openCart = cart.reduce(
  //     (pre, curr) => pre + curr.name, null)
  // };

  return (
    <HeaderWrap>
      <HeaderCart>
        <NavIcon onClick={() => openPopup()} />
        <ItemAmmount>{cart.length}</ItemAmmount>
      </HeaderCart>
      <HeaderAmmount>Summa: {totalPrice}</HeaderAmmount>
    </HeaderWrap>
    /* <Container>
        <Button onClick={openPopup}>Im a modal</Button>
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      </Container> */
  )
};

export default Header; 