import React, { useState } from 'react';
import { CartWrap, CartCard, CartItems, CartHeading, CartBtn } from '../components/shop/CartStyles';
import uuid from 'react-uuid';
import { CartContext } from './CartContext';

export const Cart = () => {
  const [cart, setCart] = useState([]);
  const items = [
    {
      id: uuid(), name: 'Tomatsoppa', price: 90
    },
    {
      id: uuid(), name: 'Skärgårdssoppa', price: 95
    },
    {
      id: uuid(), name: 'Potatis -och purjolökssoppa', price: 80
    },
    {
      id: uuid(), name: 'Linssoppa', price: 80
    },
  ];

  const addToCart = (el) => {
    setCart([...cart, el])
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart]
    hardCopy = hardCopy.filter(cartItem => cartItem.id !== el.id)
    setCart(hardCopy);
  }

  const listItems = items.map(el => (
    <div key={el.id}>
      {`${el.name}: ${el.price}kr`}
      <input type='submit' value='+' onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map(el => (
    <div key={el.id}>
      {`${el.name}: ${el.price}kr`}
      <input type='submit' value='-' onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <CartWrap>
      <CartCard>
        <CartHeading>Din kundvagn</CartHeading>
        <CartItems>{listItems}</CartItems>
        <p>Din kundvagn innehåller: ({cart.length})st soppor</p>
        <CartItems>{cartItems}</CartItems>
        <CartBtn>Till kassa</CartBtn>
        <CartBtn>Tillbaka till meny</CartBtn>
      </CartCard>
    </CartWrap>
  )
};

export default Cart;